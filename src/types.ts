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
    name: string;
    registry: string;
    page: string;
    tags?: string[];
}

export type RegistryItemType = RegistryItem;

export interface LibraryRegistry {
    isDefault?: boolean;
    name: string;
    description?: string;
    tags?: string[];
    url?: string;
    repository?: string;
    registry: {
        main?: string;
        components?: RegistryItemType[];
    }
}