import { Command } from 'commander';
import { libraries } from '../libraries';
import chalk from 'chalk';
import { logger } from '../utils/logger';

export const get = new Command('get')
    .description('Get information about available libraries or components')
    .argument('[type]', 'Type of information to retrieve (e.g., "libs")')
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

        logger.error(`Unknown type: ${type}`);
        process.exit(1);
    });