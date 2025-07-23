# Fast ShadCN

A fast and convenient CLI tool to install shadcn/ui components quickly with an interactive selection menu.

## Installation

### Global Installation
```bash
npm install -g fast-shadcn
```

### Use with npx (Recommended)
```bash
npx fast-shadcn
```

## Usage

### Interactive Selection Menu
Simply run the command to get an interactive checkbox menu with all available components:

```bash
npx fast-shadcn
```

or

```bash
fast-shadcn
```

This will show you a list of all available shadcn/ui components that you can select using checkboxes. Use arrow keys to navigate, space to select/deselect, and enter to install selected components.

### Specify Project Directory
Use the `-p` option to specify a different project directory where components should be installed:

```bash
npx fast-shadcn -p /path/to/your/project
npx fast-shadcn --project-dir "./my-react-app"
```

### Install Specific Component
You can also install a specific component directly:

```bash
npx fast-shadcn install button
# or with project directory
npx fast-shadcn -p "./my-app" install card
# or
npx fast-shadcn i card
```

### List All Components
View all available components:

```bash
npx fast-shadcn list
# or
npx fast-shadcn ls
```

## Available Components

The tool includes all official shadcn/ui components:

- **Accordion** - A vertically stacked set of interactive headings
- **Alert** - Displays a callout for user attention
- **Alert Dialog** - A modal dialog that interrupts the user
- **Avatar** - An image element with a fallback for user profile
- **Badge** - Displays a badge or a component that looks like a badge
- **Button** - Displays a button or a component that looks like a button
- **Card** - Displays a card with header, content, and footer
- **Dialog** - A window overlaid on either the primary window or another dialog
- **Input** - Displays a form input field
- **Select** - Displays a list of options for the user to pick from
- **Table** - A responsive table component
- **Tabs** - A set of layered sections of content
- **Toast** - A succinct message that is displayed temporarily
- And many more...

## Prerequisites

Before using this tool, make sure you have:

1. A React project set up with TypeScript
2. Tailwind CSS configured
3. shadcn/ui initialized in your project

If you haven't set up shadcn/ui yet, run:

```bash
npx shadcn@latest init
```

## Features

- 🚀 **Fast**: Quick installation of multiple components at once
- 🎯 **Interactive**: Checkbox-based selection menu
- 📦 **Complete**: Includes all official shadcn/ui components
- 🎨 **Pretty**: Colorful and user-friendly CLI interface
- ⚡ **Convenient**: Install multiple components in one command

## Development

To contribute or run locally:

```bash
# Clone the repository
git clone <your-repo-url>
cd fast-shadcn

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the project
npm run build

# Test the CLI locally
npm start
```

## License

MIT License - feel free to use this tool in your projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
