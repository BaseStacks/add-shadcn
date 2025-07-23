import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import execa from 'execa';
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

async function selectComponents(items: RegistryItemType[]): Promise<string[] | undefined> {
    const { selected } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selected',
            message: 'Select components:',
            choices: items.map((component: RegistryItemType) => {
                const title = typeof component === 'string' ? component.split('/').pop() : component.title;
                const value = typeof component === 'string' ? component : component.items;

                return {
                    name: title,
                    value: value
                };
            }),
            pageSize: 15
        }
    ]);

    if (selected.length === 0) {
        return;
    }

    return selected.reduce((acc: string[], item: RegistryItemType) => {
        if (typeof item === 'string') {
            acc.push(item);
        } else if (Array.isArray(item)) {
            acc.push(...item);
        }
        return acc;
    }, [] as string[]);
}

function needToInitialize(cwd: string): boolean {
    const configPath = path.join(cwd, 'components.json');
    return !fs.existsSync(configPath);
}

async function initProject(cwd: string) {
    await execa('npx', ['shadcn@latest', 'init'], {
        stdio: 'inherit',
        cwd: cwd
    });
}

export const add = new Command('add')
    .description('Add shadcn/ui components to your project')
    .option('-l, --lib <name>', 'Specify the ui library to use', 'shadcn')
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

