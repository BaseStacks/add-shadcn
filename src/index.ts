#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import execa from 'execa';
import * as path from 'path';
import * as fs from 'fs';
import { SHADCN_COMPONENTS, ShadcnComponent } from './components';

const program = new Command();

interface GlobalOptions {
  projectDir?: string;
}

async function validateProjectDirectory(projectDir: string): Promise<void> {
  const packageJsonPath = path.join(projectDir, 'package.json');
  const componentsConfigPath = path.join(projectDir, 'components.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log(chalk.yellow(`⚠️  No package.json found in ${projectDir}`));
    console.log(chalk.yellow('This might not be a valid Node.js project.'));
  }
  
  if (!fs.existsSync(componentsConfigPath)) {
    console.log(chalk.yellow(`⚠️  No components.json found in ${projectDir}`));
    console.log(chalk.yellow('Shadcn/ui might not be initialized in this project.'));
    console.log(chalk.cyan('Run "npx shadcn@latest init" to initialize shadcn/ui first.'));
  }
}

async function installComponent(componentName: string, projectDir?: string) {
  const spinner = ora(`Installing ${componentName} component...`).start();
  
  try {
    // Stop spinner to avoid interference with shadcn output
    spinner.stop();
    
    const workingDir = projectDir || process.cwd();
    console.log(chalk.cyan(`Installing ${componentName} in ${workingDir}...`));
    
    await validateProjectDirectory(workingDir);
    
    await execa('npx', ['shadcn@latest', 'add', componentName], {
      stdio: 'inherit',
      cwd: workingDir
    });
    
    console.log(chalk.green(`✅ ${componentName} component installed successfully!`));
  } catch (error) {
    console.log(chalk.red(`❌ Failed to install ${componentName} component`));
    console.error(error);
    process.exit(1);
  }
}

async function selectAndInstallComponents(options: GlobalOptions) {
  console.log(chalk.blue.bold('\n🚀 Fast ShadCN Component Installer\n'));
  
  let projectDir = options.projectDir;
 
  const { selectedComponents } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedComponents',
      message: 'Select components to install:',
      choices: SHADCN_COMPONENTS.map((component: ShadcnComponent) => ({
        name: `${component.name} - ${component.description}`,
        value: component.command,
        short: component.name
      })),
      pageSize: 15
    }
  ]);

  if (selectedComponents.length === 0) {
    console.log(chalk.yellow('No components selected. Exiting...'));
    return;
  }

  console.log(chalk.cyan(`\nInstalling ${selectedComponents.length} component(s)...\n`));

  for (const component of selectedComponents) {
    await installComponent(component, projectDir);
  }

  console.log(chalk.green.bold('\n🎉 All selected components installed successfully!'));
}

async function installSpecificComponent(componentName: string, options: GlobalOptions) {
  const component = SHADCN_COMPONENTS.find((c: ShadcnComponent) => 
    c.command === componentName || c.name.toLowerCase() === componentName.toLowerCase()
  );

  if (!component) {
    console.error(chalk.red(`❌ Component "${componentName}" not found.`));
    console.log(chalk.yellow('\nAvailable components:'));
    SHADCN_COMPONENTS.forEach((c: ShadcnComponent) => {
      console.log(chalk.gray(`  • ${c.name} (${c.command})`));
    });
    process.exit(1);
  }

  let projectDir = options.projectDir;
  
  await installComponent(component.command, projectDir);
}

program
  .name('fast-shadcn')
  .description('A fast and convenient CLI tool to install shadcn/ui components')
  .version('1.0.0')
  .option('-p, --project-dir <path>', 'specify the project directory');

program
  .command('install [component]')
  .alias('i')
  .description('Install a specific component or show selection menu')
  .action(async (component?: string) => {
    const options = program.opts() as GlobalOptions;
    
    if (component) {
      await installSpecificComponent(component, options);
    } else {
      await selectAndInstallComponents(options);
    }
  });

program
  .command('list')
  .alias('ls')
  .description('List all available components')
  .action(() => {
    console.log(chalk.blue.bold('\n📦 Available ShadCN Components:\n'));
    SHADCN_COMPONENTS.forEach((component: ShadcnComponent) => {
      console.log(chalk.green(`• ${component.name}`));
      console.log(chalk.gray(`  Command: ${component.command}`));
      console.log(chalk.gray(`  Description: ${component.description}\n`));
    });
  });

// Default action when no command is provided
program.action(async () => {
  const options = program.opts() as GlobalOptions;
  await selectAndInstallComponents(options);
});

program.parse();
