import fs from 'fs';
import chalk from 'chalk';
import execa from 'execa';
import path from 'path';
import { AddOptions } from '../types';

const getExecutor = () => {
    const lockFiles = {
        npm: 'package-lock.json',
        yarn: 'yarn.lock',
        pnpm: 'pnpm-lock.yaml',
        bun: 'bun.lockb'
    };

    let packageManger = 'npm';
    for (const [manager, lockFile] of Object.entries(lockFiles)) {
        if (fs.existsSync(path.join(process.cwd(), lockFile))) {
            packageManger = manager;
            break;
        }
    }

    switch (packageManger) {
        case 'yarn':
            return ['yarn'];
        case 'pnpm':
            return ['pnpm', 'dlx'];
        case 'bun':
            return ['bunx', '--bun'];
        default:
            return ['npx'];
    }
}

export async function installItem(item: string, options: AddOptions) {
    try {
        const executor = getExecutor();
        const version = 'latest';
        const args = [`shadcn@${version}`, 'add'];

        if (options.all) args.push('--all');
        if (options.yes) args.push('--yes');
        if (options.overwrite) args.push('--overwrite');
        if (options.cwd) args.push(`--cwd=${options.cwd}`);
        if (options.path) args.push(`--path=${options.path}`);
        if (options.silent) args.push('--silent');
        if (options.srcDir) args.push('--src-dir');
        if (options.noCssVariables) args.push('--no-css-variables');
        if (options.cssVariables) args.push('--css-variables');
        if (options.noCssVariables) args.push('--no-css-variables');

        if(item) {
            args.push(item);
        }

        if (executor[1]) {
            args.unshift(executor[1]);
        }

        console.log(chalk.blue(`${executor[0]} ${args.join(' ')}`));

        await execa(executor[0], args, {
            stdio: 'inherit'
        });

    } catch (error) {
        console.error(error);
        console.log(chalk.red(`Failed to install ${item}`));
        process.exit(1);
    }
}
