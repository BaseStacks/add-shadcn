import { LibraryRegistry } from "../types";

export default {
    name: 'bundui',
    description: 'A UI component library and template suite based on shadcn/ui with stunning landing pages, templates, and rich animations.	',
    url: 'https://bundui.io',
    repository: 'https://github.com/bundui/components',
    tags: ['landing-page', 'animation'],
    registry: {
        components: [
            {
                "name": "tilt-effect",
                "registry": "https://bundui.io/r/tilt-effect.json",
                "page": "https://bundui.io/components/tilt-effect"
            },
            {
                "name": "animated-gradient-text",
                "registry": "https://bundui.io/r/animated-gradient-text.json",
                "page": "https://bundui.io/components/animated-gradient-text"
            },
            {
                "name": "text-morph-animation",
                "registry": "https://bundui.io/r/text-morph-animation.json",
                "page": "https://bundui.io/components/text-morph-animation"
            },
            {
                "name": "animated-text",
                "registry": "https://bundui.io/r/animated-text.json",
                "page": "https://bundui.io/components/animated-text"
            },
            {
                "name": "count-animation",
                "registry": "https://bundui.io/r/count-animation.json",
                "page": "https://bundui.io/components/count-animation"
            },
            {
                "name": "floating-button",
                "registry": "https://bundui.io/r/floating-button.json",
                "page": "https://bundui.io/components/floating-button"
            },
            {
                "name": "magnetic-button",
                "registry": "https://bundui.io/r/magnetic-button.json",
                "page": "https://bundui.io/components/magnetic-button"
            },
            {
                "name": "marquee-effect",
                "registry": "https://bundui.io/r/marquee-effect.json",
                "page": "https://bundui.io/components/marquee-effect"
            },
            {
                "name": "ripple-effect",
                "registry": "https://bundui.io/r/ripple-effect.json",
                "page": "https://bundui.io/components/ripple-effect"
            },
            {
                "name": "scroll-progress-bar",
                "registry": "https://bundui.io/r/scroll-progress-bar.json",
                "page": "https://bundui.io/components/scroll-progress-bar"
            },
            {
                "name": "text-gradient-scroll",
                "registry": "https://bundui.io/r/text-gradient-scroll.json",
                "page": "https://bundui.io/components/text-gradient-scroll"
            },
            {
                "name": "meteor-shower-animation-background",
                "registry": "https://bundui.io/r/meteor-shower-animation-background.json",
                "page": "https://bundui.io/components/meteor-shower-animation-background"
            },
            {
                "name": "snowfall-animation-background",
                "registry": "https://bundui.io/r/snowfall-animation-background.json",
                "page": "https://bundui.io/components/snowfall-animation-background"
            },
            {
                "name": "fireworks-background",
                "registry": "https://bundui.io/r/fireworks-background.json",
                "page": "https://bundui.io/components/fireworks-background"
            },
            {
                "name": "floating-paths-background",
                "registry": "https://bundui.io/r/floating-paths-background.json",
                "page": "https://bundui.io/components/floating-paths-background"
            },
            {
                "name": "fluid-particles-background",
                "registry": "https://bundui.io/r/fluid-particles-background.json",
                "page": "https://bundui.io/components/fluid-particles-background"
            },
            {
                "name": "geometric-background",
                "registry": "https://bundui.io/r/geometric-background.json",
                "page": "https://bundui.io/components/geometric-background"
            },
            {
                "name": "stars-background",
                "registry": "https://bundui.io/r/stars-background.json",
                "page": "https://bundui.io/components/stars-background"
            },
            {
                "name": "wavy-background",
                "registry": "https://bundui.io/r/wavy-background.json",
                "page": "https://bundui.io/components/wavy-background"
            }
        ]
    },
} satisfies LibraryRegistry;