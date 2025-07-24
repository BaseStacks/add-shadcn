import { Argument, Command } from 'commander';
import { libraries } from '../libraries';
import chalk from 'chalk';
import { logger } from '../utils/logger';
import { Table } from 'console-table-printer';
import { formatThousands } from '../utils/format';

// Helper function to match wildcard patterns
function matchesPattern(text: string, pattern: string): boolean {
    if (!pattern) return true;
    if (!text) return false;

    // Escape special regex characters except * and ?
    const escapedPattern = pattern
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.');

    // Create regex pattern
    // ^ ensures we match from the start, $ ensures we match to the end
    const regex = new RegExp(`^${escapedPattern}$`, 'i');
    return regex.test(text);
}

// Helper function to check if any tag matches the pattern
function matchesTagPattern(tags: string[] | undefined, pattern: string): boolean {
    if (!pattern) return true;
    if (!tags || tags.length === 0) return false;

    return tags.some(tag => matchesPattern(tag, pattern));
}

// Helper function to parse sort option
function parseSortOption(sortOption: string | undefined): { field: string; order: 'asc' | 'desc' } | null {
    if (!sortOption) return null;

    const parts = sortOption.split(',');
    const field = parts[0]?.trim();
    const order = parts[1]?.trim().toLowerCase() === 'desc' ? 'desc' : 'asc';

    return { field, order };
}

// Helper function to get sortable value from object
function getSortValue(obj: any, field: string): any {
    switch (field) {
        case 'name':
            return obj.name || '';
        case 'components':
            return typeof obj.components === 'number' ? obj.components : 0;
        case 'stars':
            return typeof obj.stars === 'number' ? obj.stars : 0;
        case 'library':
            return obj.library || '';
        case 'tags':
            return obj.tags || '';
        default:
            return obj[field] || '';
    }
}

// Types for table data
interface LibTableData {
    name: string;
    tags: string;
    components: number;
    url: string;
    stars: number;
}

interface ComponentTableData {
    name: string;
    library: string;
    tags: string;
    url: string;
}

const typeArgument = new Argument('<type>', 'Type of information to get (libs or components)')
    .choices(['libs', 'components'])
    .argRequired();

const fetchStargazerCount = async (repositoryUrl: string): Promise<number> => {
    const repository = new URL(repositoryUrl).pathname.split('/').slice(1, 3).join('/');
    const response = await fetch(`https://api.github.com/repos/${repository}`);

    if (!response.ok) {
        logger.error(`Failed to fetch stargazer count for ${repositoryUrl}`);
        return 0;
    }

    const data = await response.json() as { stargazers_count: number };
    return data.stargazers_count || NaN;
}

export const get = new Command('get')
    .version('1.0.1')
    .description('Get information about available libraries or components')
    .addArgument(typeArgument)
    .option('--name <pattern>', 'Filter by name (supports wildcards: *)')
    .option('--library <pattern>', 'Filter by library name (supports wildcards: *)')
    .option('--tags <pattern>', 'Filter by tags (supports wildcards: *)')
    .option('--stars', 'Include stargazer count for libraries', false)
    .option('--sort <field,order>', 'Sort results by field (components, stars) and order (asc, desc). Example: --sort=stars,desc')
    .action(async (type, options) => {
        if (type === 'libs') {
            const libs = new Table({ defaultColumnOptions: { alignment: 'left' } });

            const filteredLibs = Object.entries(libraries)
                .filter(([name, lib]) => {
                    // Apply filters
                    if (options.name && !matchesPattern(name, options.name)) return false;
                    if (options.library && !matchesPattern(name, options.library)) return false;
                    if (options.tags && !matchesTagPattern(lib.tags, options.tags)) return false;
                    return true;
                });

            if (filteredLibs.length === 0) {
                logger.info('No libraries found matching the specified filters.');
                return;
            }

            // Prepare data for sorting
            const libsData: LibTableData[] = [];
            for (const [name, lib] of filteredLibs) {
                const rowData: LibTableData = {
                    name: name,
                    tags: lib.tags ? lib.tags.join(', ') : '-',
                    components: lib.registry.components ? lib.registry.components.length : 0,
                    url: lib.url || '',
                    stars: 0, // Default value
                };

                if (options.stars && lib.repository) {
                    const stargazersCount = await fetchStargazerCount(lib.repository);
                    rowData.stars = stargazersCount || 0;
                }

                libsData.push(rowData);
            }

            // Apply sorting
            const sortConfig = parseSortOption(options.sort);
            if (sortConfig) {
                libsData.sort((a, b) => {
                    const aValue = getSortValue(a, sortConfig.field);
                    const bValue = getSortValue(b, sortConfig.field);

                    let comparison = 0;
                    if (typeof aValue === 'number' && typeof bValue === 'number') {
                        comparison = aValue - bValue;
                    } else {
                        comparison = String(aValue).localeCompare(String(bValue));
                    }

                    return sortConfig.order === 'desc' ? -comparison : comparison;
                });
            }

            // Add formatted rows to table
            for (const rowData of libsData) {
                const row: Record<string, any> = {
                    name: chalk.bold(rowData.name),
                    tags: rowData.tags,
                    components: rowData.components,
                    url: chalk.blue(rowData.url),
                };

                if (options.stars) {
                    row['stars'] = rowData.stars ? chalk.yellow(formatThousands(rowData.stars)) : '-';
                }

                libs.addRow(row);
            }

            libs.printTable();
            return;
        }

        if (type === 'components') {
            const components = new Table({ defaultColumnOptions: { alignment: 'left' } });
            const componentsData: ComponentTableData[] = [];

            Object.entries(libraries).forEach(([name, lib]) => {
                if (lib.registry.components) {
                    const filteredComponents = lib.registry.components
                        .filter(component => {
                            // Apply filters
                            if (options.name && !matchesPattern(component.name, options.name)) return false;
                            if (options.library && !matchesPattern(name, options.library)) return false;
                            if (options.tags && !matchesTagPattern(component.tags, options.tags)) return false;
                            return true;
                        });

                    filteredComponents.forEach(component => {
                        componentsData.push({
                            name: component.name,
                            library: name,
                            tags: component.tags ? component.tags.join(', ') : '-',
                            url: component.page || '',
                        });
                    });
                }
            });

            if (componentsData.length === 0) {
                logger.info('No components found matching the specified filters.');
                return;
            }

            // Apply sorting
            const sortConfig = parseSortOption(options.sort);
            if (sortConfig) {
                componentsData.sort((a, b) => {
                    const aValue = getSortValue(a, sortConfig.field);
                    const bValue = getSortValue(b, sortConfig.field);

                    let comparison = 0;
                    if (typeof aValue === 'number' && typeof bValue === 'number') {
                        comparison = aValue - bValue;
                    } else {
                        comparison = String(aValue).localeCompare(String(bValue));
                    }

                    return sortConfig.order === 'desc' ? -comparison : comparison;
                });
            }

            // Add formatted rows to table
            for (const componentData of componentsData) {
                components.addRow({
                    name: chalk.bold(componentData.name),
                    library: chalk.bold(componentData.library),
                    tags: componentData.tags,
                    url: chalk.blue(componentData.url),
                });
            }

            components.printTable();
            return;
        }

        logger.error(`Unknown type: ${type}`);
        process.exit(1);
    });