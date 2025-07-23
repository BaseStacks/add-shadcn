
import shadcn from './ui-libs/shadcn';
import diceUi from './ui-libs/dice-ui';

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
    },
    getItems?: () => Promise<RegistryItemType[]>;
}

export const libraries: Record<string, LibraryRegistry> = {
    shadcn: shadcn,
    "dice-ui": diceUi,
}

