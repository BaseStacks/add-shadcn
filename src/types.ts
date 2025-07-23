export interface AddOptions {
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

export interface RegistryItem {
    title: string;
    items: string[];
}

export type RegistryItemType = RegistryItem | string;

export interface LibraryRegistry {
    isDefault?: boolean;
    name: string;
    description?: string;
    url?: string;
    registry: {
        main?: string;
        components?: (string | RegistryItemType)[];
    }
}