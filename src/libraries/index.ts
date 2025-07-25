
import shadcn from './shadcn';
import diceUi from './dice-ui';
import berlixUi from './berlix-ui';
import bundui from './bundui';
import aceternityUi from './aceternity-ui';
import prismui from './prismui';

import { LibraryRegistry } from '../types';

export const libraries: Record<string, LibraryRegistry> = {
    shadcn: shadcn,
    "dice-ui": diceUi,
    "berlix-ui": berlixUi,
    bundui,
    "aceternity-ui": aceternityUi,
    prismui
}

