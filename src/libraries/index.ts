
import shadcn from './shadcn';
import diceUi from './dice-ui';

import { LibraryRegistry } from '../types';

export const libraries: Record<string, LibraryRegistry> = {
    shadcn: shadcn,
    "dice-ui": diceUi
}

