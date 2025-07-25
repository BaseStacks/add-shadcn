import { Argument, Command } from 'commander';
import { libraries } from '../libraries';
import chalk from 'chalk';
import { logger } from '../utils/logger';
import { Table } from 'console-table-printer';

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
    components: number;
    url: string;
}

interface ComponentTableData {
    name: string;
    library: string;
    url: string;
}

const typeArgument = new Argument('<type>', 'Type of information to get (libs or components)')
    .choices(['libs', 'components'])
    .argRequired();

export const get = new Command('get')
    .version('1.0.1')
    .description('Get information about available libraries or components')
    .addArgument(typeArgument)
    .option('--name <pattern>', 'Filter by name (supports wildcards: *)')
    .option('--library <pattern>', 'Filter by library name (supports wildcards: *)')
    .action(async (type, options) => {
        if (type === 'libs') {
            const libs = new Table({ defaultColumnOptions: { alignment: 'left' } });

            const filteredLibs = Object.entries(libraries)
                .filter(([name, lib]) => {
                    // Apply filters
                    if (options.name && !matchesPattern(name, options.name)) return false;
                    if (options.library && !matchesPattern(name, options.library)) return false;
                    return true;
                });

            if (filteredLibs.length === 0) {
                logger.info('No libraries found matching the specified filters.');
                return;
            }

            const libsData: LibTableData[] = [];
            for (const [name, lib] of filteredLibs) {
                const rowData: LibTableData = {
                    name: name,
                    components: lib.registry.components ? lib.registry.components.length : 0,
                    url: lib.url || '',
                };

                libsData.push(rowData);
            }

            // Add formatted rows to table
            for (const rowData of libsData) {
                const row: Record<string, any> = {
                    name: chalk.bold(rowData.name),
                    components: rowData.components,
                    url: chalk.blue(rowData.url),
                };

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
                            return true;
                        });

                    filteredComponents.forEach(component => {
                        componentsData.push({
                            name: component.name,
                            library: name,
                            url: component.page || '',
                        });
                    });
                }
            });

            if (componentsData.length === 0) {
                logger.info('No components found matching the specified filters.');
                return;
            }

            // Add formatted rows to table
            for (const componentData of componentsData) {
                components.addRow({
                    name: chalk.bold(componentData.name),
                    library: chalk.bold(componentData.library),
                    url: chalk.blue(componentData.url),
                });
            }

            components.printTable();
            return;
        }

        logger.error(`Unknown type: ${type}`);
        process.exit(1);
    });