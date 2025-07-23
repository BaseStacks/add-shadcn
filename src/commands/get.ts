import { Command } from 'commander';
import { libraries } from '../libraries';
import chalk from 'chalk';
import { logger } from '../utils/logger';
import { Table } from 'console-table-printer';

export const get = new Command('get')
    .description('Get information about available libraries or components')
    .argument('[type]', 'Type of information to retrieve (e.g., "libs")')
    .action(async (type) => {
        if (type === 'libs') {
            const libs = new Table();
            const trimText = (text: string, length: number) => text.length > length ? text.slice(0, length - 3) + '...' : text;
            Object.entries(libraries).map(([name, lib]) => {
                libs.addRow({
                    name: chalk.bold(name),
                    url: chalk.blue(lib.url || ''),
                    tags: lib.tags ? lib.tags.join(', ') : '-',
                    components: lib.registry.components ? lib.registry.components.length : 0,
                });
            });
            libs.printTable();
            return;
        }

        logger.error(`Unknown type: ${type}`);
        process.exit(1);
    });