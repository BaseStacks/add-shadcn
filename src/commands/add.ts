import { Command } from 'commander';
import { select } from '@inquirer/prompts';
import inquirer from 'inquirer';
import { installItem } from '../utils/installer';
import { logger } from '../utils/logger';
import { AddOptions, RegistryItemType } from '../types';
import { libraries } from '../libraries';

async function selectLibrary() {
    const choices = Object.entries(libraries).map(([name, registry]) => ({
        name: registry.name,
        description: registry.description,
        value: name,
    }));

    const answer = await select({
        message: 'Select a registry:',
        choices
    });

    if (!answer) {
        return undefined;
    }

    const selectedRegistry = libraries[answer];
    return selectedRegistry;
}

// Function to find components across all libraries
function findComponentsAcrossLibraries(componentNames: string[]): Array<{
    componentName: string;
    libraryName: string;
    library: any;
    component: RegistryItemType;
}> {
    const foundComponents: Array<{
        componentName: string;
        libraryName: string;
        library: any;
        component: RegistryItemType;
    }> = [];

    for (const componentName of componentNames) {
        for (const [libraryName, library] of Object.entries(libraries)) {
            const component = library.registry.components?.find(
                comp => comp.name.toLowerCase() === componentName.toLowerCase()
            );
            
            if (component) {
                foundComponents.push({
                    componentName,
                    libraryName,
                    library,
                    component
                });
            }
        }
    }

    return foundComponents;
}

// Function to let user select from multiple library options for a component
async function selectLibraryForComponent(componentName: string, options: Array<{
    libraryName: string;
    library: any;
    component: RegistryItemType;
}>): Promise<{ libraryName: string; library: any; component: RegistryItemType } | undefined> {
    const choices = options.map(option => ({
        name: `${option.library.name} (${option.libraryName})`,
        description: option.library.description || '',
        value: option,
    }));

    const answer = await select({
        message: `Component "${componentName}" found in multiple libraries. Select one:`,
        choices
    });

    return answer;
}

async function selectComponents(items: RegistryItemType[]): Promise<string[] | undefined> {
    const { selected } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selected',
            message: 'Select components:',
            choices: items.map((component: RegistryItemType) => {
                return {
                    name: component.name,
                    value: component.registry
                };
            }),
            pageSize: 15
        }
    ]);

    if (selected.length === 0) {
        return;
    }

    return selected;
}

export const add = new Command('add')
    .description('Add shadcn/ui components to your project')
    .option('-l, --lib <name>', 'Specify the ui library to use')
    .option('-C, --component <components...>', 'Specify component names to install')
    // Shadcn specific options
    .option('-y, --yes', 'Skip confirmation prompts', false)
    .option('-o, --overwrite', 'overwrite existing files', false)
    .option('-c, --cwd <path>', 'the working directory. defaults to the current directory')
    .option('-a, --all', 'add all available components', false)
    .option('-p, --path <path>', 'the path to add the component to', '')
    .option('-s, --silent', 'mute output', false)
    .option('--src-dir <path>', 'use the src directory when creating a new project', false)
    .option('--css-variables', 'use css variables for theming', false)
    .option('--no-css-variables', 'do not use css variables for theming')
    .action(async (options: AddOptions) => {
        // Handle direct component installation
        if (options.component && options.component.length > 0) {
            if (options.lib) {
                // Library specified, install from that library
                const library = libraries[options.lib];
                if (!library) {
                    logger.error(`Invalid library: ${options.lib}`);
                    process.exit(1);
                }

                const availableItems = library.registry.components || [];
                for (const componentName of options.component) {
                    const component = availableItems.find(
                        comp => comp.name.toLowerCase() === componentName.toLowerCase()
                    );
                    
                    if (!component) {
                        logger.error(`Component "${componentName}" not found in library "${options.lib}"`);
                        process.exit(1);
                    }
                    
                    await installItem(component.registry, options);
                }
                return;
            } else {
                // No library specified, search across all libraries
                const foundComponents = findComponentsAcrossLibraries(options.component);
                
                if (foundComponents.length === 0) {
                    logger.error(`No components found with names: ${options.component.join(', ')}`);
                    process.exit(1);
                }

                // Group by component name to handle duplicates
                const componentGroups = new Map<string, Array<{
                    libraryName: string;
                    library: any;
                    component: RegistryItemType;
                }>>();

                for (const found of foundComponents) {
                    if (!componentGroups.has(found.componentName)) {
                        componentGroups.set(found.componentName, []);
                    }
                    componentGroups.get(found.componentName)!.push({
                        libraryName: found.libraryName,
                        library: found.library,
                        component: found.component
                    });
                }

                // Process each component
                for (const [componentName, libraryOptions] of componentGroups) {
                    if (libraryOptions.length === 1) {
                        // Single match, install directly
                        const { component } = libraryOptions[0];
                        await installItem(component.registry, options);
                    } else {
                        // Multiple matches, let user select
                        const selected = await selectLibraryForComponent(componentName, libraryOptions);
                        if (selected) {
                            await installItem(selected.component.registry, options);
                        } else {
                            logger.error(`No library selected for component "${componentName}"`);
                            process.exit(1);
                        }
                    }
                }
                return;
            }
        }

        // Original interactive flow
        const library = options.lib ? libraries[options.lib] : await selectLibrary();
        if (!library) {
            logger.error('Invalid library selected');
            process.exit(1);
        }

        const availableItems = library.registry.components || [];

        if (availableItems.length === 0) {
            logger.error('No components available from the registry.');
            process.exit(1);
        }

        let components: string[] = [];
        if (options.all) {
            await installItem('', options)
        }
        else {
            components = await selectComponents(availableItems) ?? [];
            if (!components?.length) {
                logger.error('No components selected');
                process.exit(1);
            }

            for (const component of components) {
                await installItem(component, options);
            }
        }
    });

