import { LibraryRegistry } from "../types";

export default {
    name: 'berlix-ui',
    description: 'Animated components library built using Tailwind CSS and Motion.',
    url: 'https://ui.rechesoares.com',
    repository: 'https://github.com/reche13/berlix',
    tags: ['animation'],
    registry: {
        components: [
            {
                "name": "text-circle",
                "registry": "https://ui.rechesoares.com/registry/text-circle.json",
                "page": "https://ui.rechesoares.com/docs/text-circle"
            },
            {
                "name": "text-reveal",
                "registry": "https://ui.rechesoares.com/registry/text-reveal.json",
                "page": "https://ui.rechesoares.com/docs/text-reveal"
            },
            {
                "name": "text-ripple",
                "registry": "https://ui.rechesoares.com/registry/text-ripple.json",
                "page": "https://ui.rechesoares.com/docs/text-ripple"
            },
            {
                "name": "text-scramble",
                "registry": "https://ui.rechesoares.com/registry/text-scramble.json",
                "page": "https://ui.rechesoares.com/docs/text-scramble"
            },
            {
                "name": "text-split",
                "registry": "https://ui.rechesoares.com/registry/text-split.json",
                "page": "https://ui.rechesoares.com/docs/text-split"
            },
            {
                "name": "checkbox",
                "registry": "https://ui.rechesoares.com/registry/checkbox.json",
                "page": "https://ui.rechesoares.com/docs/checkbox"
            },
            {
                "name": "input",
                "registry": "https://ui.rechesoares.com/registry/input.json",
                "page": "https://ui.rechesoares.com/docs/input"
            },
            {
                "name": "menu-fluid",
                "registry": "https://ui.rechesoares.com/registry/menu-fluid.json",
                "page": "https://ui.rechesoares.com/docs/menu-fluid"
            },
            {
                "name": "menu-vertical",
                "registry": "https://ui.rechesoares.com/registry/menu-vertical.json",
                "page": "https://ui.rechesoares.com/docs/menu-vertical"
            },
            {
                "name": "book",
                "registry": "https://ui.rechesoares.com/registry/book.json",
                "page": "https://ui.rechesoares.com/docs/book"
            },
            {
                "name": "flip-card",
                "registry": "https://ui.rechesoares.com/registry/flip-card.json",
                "page": "https://ui.rechesoares.com/docs/flip-card"
            },
            {
                "name": "tilt-card",
                "registry": "https://ui.rechesoares.com/registry/tilt-card.json",
                "page": "https://ui.rechesoares.com/docs/tilt-card"
            },
            {
                "name": "gradient-bars",
                "registry": "https://ui.rechesoares.com/registry/gradient-bars.json",
                "page": "https://ui.rechesoares.com/docs/gradient-bars"
            }
        ]
    },
} satisfies LibraryRegistry;