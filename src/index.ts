#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import execa from 'execa';
import path from 'path';
import fs from 'fs';
import { select } from '@inquirer/prompts';
import { libraries, RegistryItemType } from './libraries';
import { installItem } from './installer';

const program = new Command();

interface Options {
  lib: string;
  // Shadcn specific options
  yes: boolean;
  overwrite: boolean;
  cwd: string;
  all: boolean;
  path: string;
  silent: boolean;
  srcDir: false;
  noSrcDir: boolean;
  cssVariables: boolean;
  noCssVariables: boolean;
}


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
    console.log(chalk.red('No registry selected'));
    process.exit(1);
  }
  const selectedRegistry = libraries[answer];
  return selectedRegistry;
}


async function selectComponents(items: RegistryItemType[]) {
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

program
  .name('shadcn-add [components]')
  .description('A fast and convenient CLI tool to install shadcn/ui components')
  .version('1.0.0')
  // Global options
  .option('-l, --lib <name>', 'Specify the ui library to use', 'shadcn')
  // Shadcn specific options
  .option('-y, --yes', 'Skip confirmation prompts', false)
  .option('-o, --overwrite', 'overwrite existing files', false)
  .option('-c, --cwd <path>', 'the working directory. defaults to the current directory', process.cwd())
  .option('-a, --all', 'add all available components', false)
  .option('-p, --path <path>', 'the path to add the component to', '')
  .option('-s, --silent', 'mute output', false)
  .option('--src-dir <path>', 'use the src directory when creating a new project', false)
  .option('--css-variables', 'use css variables for theming', false)
  .option('--no-css-variables', 'do not use css variables for theming')
  .action(async (options: Options) => {
    const library = options.lib ? libraries[options.lib] : await selectLibrary();
    if (!library) {
      console.log(chalk.red('Invalid library selected'));
      process.exit(1);
    }

    const availableItems = library.registry.components || [];

    const components = await selectComponents(availableItems);

    if (!components || components.length === 0) {
      console.log(chalk.red('No components selected'));
      process.exit(1);
    }

    if (availableItems.length === 0) {
      console.log(chalk.red('No components available from the registry.'));
      process.exit(1);
    }

    const needToInit = needToInitialize(options.cwd);
    if (needToInit) {
      console.log(chalk.yellow('No components.json found. Initializing...'));
      await initProject(options.cwd);
    }

    if (!components) {
      console.log(chalk.yellow('No components selected'));
      return;
    }

    for (const component of components) {
      await installItem(component, options.cwd);
    }
  });

program.command('get [type]')
  .action(async (type) => {
    if (type === 'libs') {
      for (const [key, lib] of Object.entries(libraries)) {
        let message = `- ${chalk.green(lib.name)}: `;
        if (lib.description) {
          message += `${chalk.gray(lib.description)} `;
        }
        message += `(${chalk.blue(lib.url)})`;
        console.log(message);
      }

      return;
    }

    throw new Error(`Unknown type: ${type}`);
  })

program.parse();
