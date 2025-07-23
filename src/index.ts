#!/usr/bin/env node

import { add } from './commands/add';
import { get } from './commands/get';

add.addCommand(get);

add.parse();

