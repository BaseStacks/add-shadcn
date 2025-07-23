# Fast ShadCN CLI Tool

## Quick Start

1. **Test locally:**
   ```bash
   cd d:\tungnt\BaseStacks\fast-shadcn
   npm run build
   node dist/index.js
   ```

2. **Link globally for testing:**
   ```bash
   npm link
   npx fast-shadcn
   ```

3. **Publish to npm (when ready):**
   ```bash
   npm login
   npm publish
   ```

## Usage Examples

### Interactive Selection Menu
```bash
npx fast-shadcn
```
This shows a checkbox menu where you can select multiple components to install.

### Install Specific Component
```bash
npx fast-shadcn install button
npx fast-shadcn i card
```

### List All Components
```bash
npx fast-shadcn list
npx fast-shadcn ls
```

## Features

✅ Interactive checkbox selection menu
✅ Install multiple components at once
✅ Beautiful CLI interface with colors and spinners
✅ Complete list of all shadcn/ui components
✅ Support for specific component installation
✅ Help and list commands

## Next Steps

1. Test the tool in a real React project with shadcn/ui
2. Add error handling for when shadcn/ui is not initialized
3. Add option to initialize shadcn/ui if not present
4. Consider adding component preview/documentation links
5. Publish to npm registry
