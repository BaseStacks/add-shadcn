import { LibraryRegistry } from "../types";

export default {
    name: 'prismui',
    description: 'Make your websites look better, modern, beautiful, awesome',
    url: 'https://www.prismui.tech/',
    repository: 'https://github.com/Codehagen/Prismui',
    registry: {
        components: [{
            "name": 'display-card',
            "description": 'A visually appealing stacked card layout with hover animations and grayscale effects',
            "registry": 'https://www.prismui.tech/r/styles/default/display-cards.json',
            "page": 'https://www.prismui.tech/docs/components/display-cards'
        }, {
            "name": "expandable-card",
            "description": "An interactive, expandable card component for displaying project status and details with smooth animations.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/expandable-card.json",
            "page": "https://www.prismui.tech/docs/components/expandable-card"
        }, {
            "name": "floating-action-panel",
            "description": "The Floating Action Panel component provides a flexible way to create floating action menus and forms. Perfect for contextual actions, quick access menus, and note-taking interfaces.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/floating-action-panel.json",
            "page": "https://www.prismui.tech/docs/components/floating-action-panel"
        }, {
            "name": "hero-badge",
            "description": "A prominent badge designed for hero sections or important announcements.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/hero-badge.json",
            "page": "https://www.prismui.tech/docs/components/hero-badge"
        },
        {
            "name": "popover",
            "description": "A small overlay that appears on top of other content, typically triggered by a user action.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/popover.json",
            "page": "https://www.prismui.tech/docs/components/popover"
        },
        {
            "name": "status-badge",
            "description": "A badge component specifically designed to indicate the status of an item or process.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/status-badge.json",
            "page": "https://www.prismui.tech/docs/components/status-badge"
        },
        {
            "name": "tweet-card",
            "description": "A component designed to display a tweet or similar social media post within your application.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/tweet-card.json",
            "page": "https://www.prismui.tech/docs/components/tweet-card"
        },
        {
            "name": "action-button",
            "description": "A versatile button component with support for icons, loading states, and various styles to indicate an action.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/action-button.json",
            "page": "https://www.prismui.tech/docs/components/action-button"
        },
        {
            "name": "button-group",
            "description": "A container for grouping related buttons, often used for toggle selections or sets of actions.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/button-group.json",
            "page": "https://www.prismui.tech/docs/components/button-group"
        },
        {
            "name": "enhanced-button",
            "description": "An advanced button component offering more customization and functionality beyond a standard button.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/enhanced-button.json",
            "page": "https://www.prismui.tech/docs/components/enhanced-button"
        },
        {
            "name": "word-reveal",
            "description": "A text animation component that reveals words sequentially, creating a dynamic typographic effect.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/word-reveal.json",
            "page": "https://www.prismui.tech/docs/components/word-reveal"
        },
        {
            "name": "number-flow",
            "description": "A component to visualize numerical data flow, often used for financial transactions or progress tracking.",
            "registry": "npx shadcn@latest add https://www.prismui.tech/r/styles/default/number-flow.json",
            "page": "https://www.prismui.tech/docs/components/number-flow"
        }]
    }
} as LibraryRegistry;