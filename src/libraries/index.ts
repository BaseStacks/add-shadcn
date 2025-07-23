
import shadcn from './shadcn';
import diceUi from './dice-ui';
import berlixUi from './berlix-ui';
import bundui from './bundui';

import { LibraryRegistry } from '../types';

export const libraries: Record<string, LibraryRegistry> = {
    shadcn: shadcn,
    "dice-ui": diceUi,
    "berlix-ui": berlixUi,
    bundui: bundui
}

