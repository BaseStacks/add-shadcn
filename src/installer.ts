import fs from 'fs';
import { LibraryRegistry, RegistryItemType } from './libraries';
import chalk from 'chalk';
import execa from 'execa';
import path from 'path';

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

export async function installItem(item: string, workingDir: string) {
    try {
        const executor = getExecutor();
        const version = 'latest';
        const args = [`shadcn@${version}`, 'add', item];

        console.log(chalk.blue(`${executor[0]} ${args.join(' ')}`));

        if (executor[1]) {
            args.unshift(executor[1]);
        }

        await execa(executor[0], args, {
            stdio: 'inherit',
            cwd: workingDir
        });

    } catch (error) {
        console.error(error);
        console.log(chalk.red(`Failed to install ${item}`));
        process.exit(1);
    }
}
