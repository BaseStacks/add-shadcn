import { LibraryRegistry } from "../types";

export default {
    name: 'aceternity-ui',
    description: 'Make your websites look better, modern, beautiful, awesome',
    url: 'https://ui.aceternity.com/',
    tags: ['modern', 'beautifully', 'motion'],
    registry: {
        components: [
            {
                name: "3d-card",
                description: "A card perspective effect, hover over the card to elevate card elements.",
                registry: "https://ui.aceternity.com/registry/3d-card.json",
                page: "https://ui.aceternity.com/components/3d-card-effect"
            },
            {
                name: "text-hover-effect",
                description: "A text hover effect that animates and outlines gradient on hover, as seen on x.ai",
                registry: "https://ui.aceternity.com/registry/text-hover-effect.json",
                page: "https://ui.aceternity.com/components/text-hover-effect"
            },
            {
                name: "animated-testimonials",
                description: "Minimal testimonials sections with image and quote.",
                registry: "https://ui.aceternity.com/registry/animated-testimonials.json",
                page: "https://ui.aceternity.com/components/animated-testimonials"
            },
            {
                name: "apple-cards-carousel",
                description: "A sleek and minimal carousel implementation, as seen on apple.com",
                registry: "https://ui.aceternity.com/registry/apple-cards-carousel.json",
                page: "https://ui.aceternity.com/components/apple-cards-carousel"
            },
            {
                name: "background-beams-with-collision",
                description: "Exploding beams in the background",
                registry: "https://ui.aceternity.com/registry/background-beams-with-collision.json",
                page: "https://ui.aceternity.com/components/background-beams-with-collision"
            },
            {
                name: "background-lines",
                description: "A set of svg paths that animate in a wave pattern. Good for hero sections background, as seen on height.app",
                registry: "https://ui.aceternity.com/registry/background-lines.json",
                page: "https://ui.aceternity.com/components/background-lines"
            },
            {
                name: "card-spotlight",
                description: "A card component with a spotlight effect revealing a radial gradient background",
                registry: "https://ui.aceternity.com/registry/card-spotlight.json",
                page: "https://ui.aceternity.com/components/card-spotlight"
            },
            {
                name: "carousel",
                description: "A customizable carousel with microinteractions and slider.",
                registry: "https://ui.aceternity.com/registry/carousel.json",
                page: "https://ui.aceternity.com/components/carousel"
            },
            {
                name: "code-block",
                description: "A configurable code block component built on top of react-syntax-highlighter.",
                registry: "https://ui.aceternity.com/registry/code-block.json",
                page: "https://ui.aceternity.com/components/code-block"
            },
            {
                name: "colourful-text",
                description: "A text component with various colours, filter and scale effects.",
                registry: "https://ui.aceternity.com/registry/colourful-text.json",
                page: "https://ui.aceternity.com/components/colourful-text"
            },
            {
                name: "comet-card",
                description: "A perspective, 3D, Tilt card as seen on Perplexity Comet's website.",
                registry: "https://ui.aceternity.com/registry/comet-card.json",
                page: "https://ui.aceternity.com/components/comet-card"
            },
            {
                name: "compare",
                description: "A comparison component between two images, slide or drag to compare",
                registry: "https://ui.aceternity.com/registry/compare.json",
                page: "https://ui.aceternity.com/components/compare"
            },
            {
                name: "cover",
                description: "A Cover component that wraps any children, providing beams and space effect, hover to reveal speed.",
                registry: "https://ui.aceternity.com/registry/cover.json",
                page: "https://ui.aceternity.com/components/cover"
            },
            {
                name: "container-text-flip",
                description: "A container that flips through words, animating the width.",
                registry: "https://ui.aceternity.com/registry/container-text-flip.json",
                page: "https://ui.aceternity.com/components/container-text-flip"
            },
            {
                name: "draggable-card",
                description: "A tiltable, draggable card component that jumps on bounds.",
                registry: "https://ui.aceternity.com/registry/draggable-card.json",
                page: "https://ui.aceternity.com/components/draggable-card"
            },
            {
                name: "expandable-cards",
                description: "Click cards to expand them and show additional information",
                registry: "https://ui.aceternity.com/registry/expandable-cards.json",
                page: "https://ui.aceternity.com/components/expandable-cards"
            },
            {
                name: "feature-sections",
                description: "A set of feature sections ranging from bento grids to simple layouts",
                registry: "https://ui.aceternity.com/registry/feature-sections.json",
                page: "https://ui.aceternity.com/components/feature-sections"
            },
            {
                name: "file-upload",
                description: "A minimal file upload form with background grid, drag and drop, and micro interactions.",
                registry: "https://ui.aceternity.com/registry/file-upload.json",
                page: "https://ui.aceternity.com/components/file-upload"
            },
            {
                name: "floating-dock",
                description: "A floating dock mac os style component, acts as a navigation bar.",
                registry: "https://ui.aceternity.com/registry/floating-dock.json",
                page: "https://ui.aceternity.com/components/floating-dock"
            },
            {
                name: "focus-cards",
                description: "Hover over the card to focus on it, blurring the rest of the cards.",
                registry: "https://ui.aceternity.com/registry/focus-cards.json",
                page: "https://ui.aceternity.com/components/focus-cards"
            },
            {
                name: "hero-sections",
                description: "A set of hero sections ranging from simple to complex layouts",
                registry: "https://ui.aceternity.com/registry/hero-sections.json",
                page: "https://ui.aceternity.com/components/hero-sections"
            },
            {
                name: "lens",
                description: "A lens component to zoom into images, videos, or practically anything.",
                registry: "https://ui.aceternity.com/registry/lens.json",
                page: "https://ui.aceternity.com/components/lens"
            },
            {
                name: "loaders",
                description: "A set of simple and minimal loaders for your loading screens and components.",
                registry: "https://ui.aceternity.com/registry/loaders.json",
                page: "https://ui.aceternity.com/components/loaders"
            },
            {
                name: "pointer-highlight",
                description: "A component that highlights text when it's in view, with a pointer and border.",
                registry: "https://ui.aceternity.com/registry/pointer-highlight.json",
                page: "https://ui.aceternity.com/components/pointer-highlight"
            },
            {
                name: "resizable-navbar",
                description: "A navbar that changes width on scroll, responsive and animated.",
                registry: "https://ui.aceternity.com/registry/resizable-navbar.json",
                page: "https://ui.aceternity.com/components/resizable-navbar"
            },
            {
                name: "stateful-button",
                description: "A button that shows a loading state when clicked, and a success state when the action is completed.",
                registry: "https://ui.aceternity.com/registry/stateful-button.json",
                page: "https://ui.aceternity.com/components/stateful-button"
            },
            {
                name: "sticky-banner",
                description: "A banner component that sticks to top, hides when user scrolls down",
                registry: "https://ui.aceternity.com/registry/sticky-banner.json",
                page: "https://ui.aceternity.com/components/sticky-banner"
            },
            {
                name: "world-map",
                description: "A world map with animated lines and dots, programatically generated.",
                registry: "https://ui.aceternity.com/registry/world-map.json",
                page: "https://ui.aceternity.com/components/world-map"
            },
            {
                name: "google-gemini-effect",
                description: "An effect of SVGs as seen on the Google Gemini Website",
                registry: "https://ui.aceternity.com/registry/google-gemini-effect.json",
                page: "https://ui.aceternity.com/components/google-gemini-effect"
            },
            {
                name: "tracing-beam",
                description: "A Beam that follows the path of an SVG as the user scrolls. Adjusts beam length with scroll speed.",
                registry: "https://ui.aceternity.com/registry/tracing-beam.json",
                page: "https://ui.aceternity.com/components/tracing-beam"
            },
            {
                name: "3d-marquee",
                description: "A 3D Marquee effect with grid, good for showcasing testimonials and hero sections",
                registry: "https://ui.aceternity.com/registry/3d-marquee.json",
                page: "https://ui.aceternity.com/components/3d-marquee"
            },
            {
                name: "animated-modal",
                description: "A customizable, compound modal component with animated transitions",
                registry: "https://ui.aceternity.com/registry/animated-modal.json",
                page: "https://ui.aceternity.com/components/animated-modal"
            },
            {
                name: "animated-tooltip",
                description: "A cool tooltip that reveals on hover, follows mouse pointer",
                registry: "https://ui.aceternity.com/registry/animated-tooltip.json",
                page: "https://ui.aceternity.com/components/animated-tooltip"
            },
            {
                name: "aurora-background",
                description: "A subtle Aurora or Southern Lights background for your website.",
                registry: "https://ui.aceternity.com/registry/aurora-background.json",
                page: "https://ui.aceternity.com/components/aurora-background"
            },
            {
                name: "background-beams",
                description: "Multiple background beams that follow a path of SVG, makes a good hero section background.",
                registry: "https://ui.aceternity.com/registry/background-beams.json",
                page: "https://ui.aceternity.com/components/background-beams"
            },
            {
                name: "background-gradient-animation",
                description: "A smooth and elegant background gradient animation that changes the gradient position over time.",
                registry: "https://ui.aceternity.com/registry/background-gradient-animation.json",
                page: "https://ui.aceternity.com/components/background-gradient-animation"
            },
            {
                name: "bento-grid",
                description: "A skewed grid layout with Title, description and a header component",
                registry: "https://ui.aceternity.com/registry/bento-grid.json",
                page: "https://ui.aceternity.com/components/bento-grid"
            },
            {
                name: "canvas-reveal-effect",
                description: "A dot background that expands on hover, as seen on Clerk's website",
                registry: "https://ui.aceternity.com/registry/canvas-reveal-effect.json",
                page: "https://ui.aceternity.com/components/canvas-reveal-effect"
            },
            {
                name: "card-stack",
                description: "Cards stack on top of each other after some interval. Perfect for showing testimonials.",
                registry: "https://ui.aceternity.com/registry/card-stack.json",
                page: "https://ui.aceternity.com/components/card-stack"
            },
            {
                name: "cards",
                description: "A set of cards that can be used for different use cases",
                registry: "https://ui.aceternity.com/registry/cards.json",
                page: "https://ui.aceternity.com/components/cards"
            },
            {
                name: "container-scroll-animation",
                description: "A scroll animation that rotates in 3d on scroll. Perfect for hero or marketing sections.",
                registry: "https://ui.aceternity.com/registry/container-scroll-animation.json",
                page: "https://ui.aceternity.com/components/container-scroll-animation"
            },
            {
                name: "evervault-card",
                description: "A cool card with amazing hover effect, reveals encrypted text and a mixed gradient.",
                registry: "https://ui.aceternity.com/registry/evervault-card.json",
                page: "https://ui.aceternity.com/components/evervault-card"
            },
            {
                name: "flip-words",
                description: "A component that flips through a list of words",
                registry: "https://ui.aceternity.com/registry/flip-words.json",
                page: "https://ui.aceternity.com/components/flip-words"
            },
            {
                name: "github-globe",
                description: "A globe animation as seen on GitHub's homepage. Interactive and customizable.",
                registry: "https://ui.aceternity.com/registry/github-globe.json",
                page: "https://ui.aceternity.com/components/github-globe"
            },
            {
                name: "glare-card",
                description: "A glare effect that happens on hover, as seen on Linear's website",
                registry: "https://ui.aceternity.com/registry/glare-card.json",
                page: "https://ui.aceternity.com/components/glare-card"
            },
            {
                name: "glowing-effect",
                description: "A border glowing effect that adapts to any container or card, as seen on Cursor's website.",
                registry: "https://ui.aceternity.com/registry/glowing-effect.json",
                page: "https://ui.aceternity.com/components/glowing-effect"
            },
            {
                name: "glowing-background-stars-card",
                description: "Card background stars that animate on hover and animate anyway",
                registry: "https://ui.aceternity.com/registry/glowing-background-stars-card.json",
                page: "https://ui.aceternity.com/components/glowing-background-stars-card"
            },
            {
                name: "grid-and-dot-backgrounds",
                description: "A simple grid and dots background to make your sections stand out.",
                registry: "https://ui.aceternity.com/registry/grid-and-dot-backgrounds.json",
                page: "https://ui.aceternity.com/components/grid-and-dot-backgrounds"
            },
            {
                name: "hero-highlight",
                description: "A background effect with a text highlight component, perfect for hero sections.",
                registry: "https://ui.aceternity.com/registry/hero-highlight.json",
                page: "https://ui.aceternity.com/components/hero-highlight"
            },
            {
                name: "hero-parallax",
                description: "A scroll effect with rotation, translation and opacity animations.",
                registry: "https://ui.aceternity.com/registry/hero-parallax.json",
                page: "https://ui.aceternity.com/components/hero-parallax"
            },
            {
                name: "infinite-moving-cards",
                description: "A customizable group of cards that move infinitely in a loop. Made with Framer Motion and Tailwind CSS.",
                registry: "https://ui.aceternity.com/registry/infinite-moving-cards.json",
                page: "https://ui.aceternity.com/components/infinite-moving-cards"
            },
            {
                name: "lamp-section-header",
                description: "A lamp effect as seen on linear, great for section headers.",
                registry: "https://ui.aceternity.com/registry/lamp-section-header.json",
                page: "https://ui.aceternity.com/components/lamp-section-header"
            },
            {
                name: "layout-grid",
                description: "A layout effect that animates the grid item on click, powered by framer motion layout",
                registry: "https://ui.aceternity.com/registry/layout-grid.json",
                page: "https://ui.aceternity.com/components/layout-grid"
            },
            {
                name: "link-preview",
                description: "Dynamic link previews for your anchor tags",
                registry: "https://ui.aceternity.com/registry/link-preview.json",
                page: "https://ui.aceternity.com/components/link-preview"
            },
            {
                name: "meteor-effect",
                description: "A group of beams in the background of a container, sort of like meteors.",
                registry: "https://ui.aceternity.com/registry/meteor-effect.json",
                page: "https://ui.aceternity.com/components/meteor-effect"
            },
            {
                name: "moving-border",
                description: "A border that moves around the container. Perfect for making your buttons stand out.",
                registry: "https://ui.aceternity.com/registry/moving-border.json",
                page: "https://ui.aceternity.com/components/moving-border"
            },
            {
                name: "parallax-grid-scroll",
                description: "A grid where two columns scroll in oposite directions, giving a parallax effect.",
                registry: "https://ui.aceternity.com/registry/parallax-grid-scroll.json",
                page: "https://ui.aceternity.com/components/parallax-grid-scroll"
            },
            {
                name: "placeholders-and-vanish-input",
                description: "Sliding in placeholders and vanish effect of input on submit",
                registry: "https://ui.aceternity.com/registry/placeholders-and-vanish-input.json",
                page: "https://ui.aceternity.com/components/placeholders-and-vanish-input"
            },
            {
                name: "shooting-stars-and-stars-background",
                description: "A shooting star animation on top of a starry background, as seen on figmaplug.in",
                registry: "https://ui.aceternity.com/registry/shooting-stars-and-stars-background.json",
                page: "https://ui.aceternity.com/components/shooting-stars-and-stars-background"
            },
            {
                name: "sidebar",
                description: "Expandable sidebar that expands on hover, mobile responsive and dark mode support",
                registry: "https://ui.aceternity.com/registry/sidebar.json",
                page: "https://ui.aceternity.com/components/sidebar"
            },
            {
                name: "signup-form",
                description: "A customizable form built on top of shadcn's input and label, with a touch of framer motion",
                registry: "https://ui.aceternity.com/registry/signup-form.json",
                page: "https://ui.aceternity.com/components/signup-form"
            },
            {
                name: "sparkles",
                description: "A configurable sparkles component that can be used as a background or as a standalone component.",
                registry: "https://ui.aceternity.com/registry/sparkles.json",
                page: "https://ui.aceternity.com/components/sparkles"
            },
            {
                name: "spotlight-new",
                description: "A new spotlight component with left and right spotlight, configurable and customizable.",
                registry: "https://ui.aceternity.com/registry/spotlight-new.json",
                page: "https://ui.aceternity.com/components/spotlight-new"
            },
            {
                name: "spotlight",
                description: "A spotlight effect with Tailwind CSS, good for drawing attention to a particular element on the page.",
                registry: "https://ui.aceternity.com/registry/spotlight.json",
                page: "https://ui.aceternity.com/components/spotlight"
            },
            {
                name: "sticky-scroll-reveal",
                description: "A sticky container that sticks while scrolling, text reveals on scroll",
                registry: "https://ui.aceternity.com/registry/sticky-scroll-reveal.json",
                page: "https://ui.aceternity.com/components/sticky-scroll-reveal"
            },
            {
                name: "svg-mask-effect",
                description: "A mask reveal effect, hover the cursor over a container to reveal what's underneath.",
                registry: "https://ui.aceternity.com/registry/svg-mask-effect.json",
                page: "https://ui.aceternity.com/components/svg-mask-effect"
            },
            {
                name: "animated-tabs",
                description: "Tabs to switch content, click on a tab to check background animation.",
                registry: "https://ui.aceternity.com/registry/animated-tabs.json",
                page: "https://ui.aceternity.com/components/animated-tabs"
            },
            {
                name: "text-generate-effect",
                description: "A cool text effect that fades in text on page load, one by one.",
                registry: "https://ui.aceternity.com/registry/text-generate-effect.json",
                page: "https://ui.aceternity.com/components/text-generate-effect"
            },
            {
                name: "text-reveal-card",
                description: "Mousemove effect to reveal text content at the bottom of the card.",
                registry: "https://ui.aceternity.com/registry/text-reveal-card.json",
                page: "https://ui.aceternity.com/components/text-reveal-card"
            },
            {
                name: "typewriter-effect",
                description: "Text generates as if it is being typed on the screen.",
                registry: "https://ui.aceternity.com/registry/typewriter-effect.json",
                page: "https://ui.aceternity.com/components/typewriter-effect"
            },
            {
                name: "vortex-background",
                description: "A wavy, swirly, vortex background ideal for CTAs and backgrounds.",
                registry: "https://ui.aceternity.com/registry/vortex-background.json",
                page: "https://ui.aceternity.com/components/vortex-background"
            },
            {
                name: "wavy-background",
                description: "A cool background effect with waves that move.",
                registry: "https://ui.aceternity.com/registry/wavy-background.json",
                page: "https://ui.aceternity.com/components/wavy-background"
            },
            {
                name: "wobble-card",
                description: "A card effect that translates and scales on mousemove, perfect for feature cards.",
                registry: "https://ui.aceternity.com/registry/wobble-card.json",
                page: "https://ui.aceternity.com/components/wobble-card"
            },
            {
                name: "hover-border-gradient",
                description: "A hover effect that expands to the entire container with a gradient border.",
                registry: "https://ui.aceternity.com/registry/hover-border-gradient.json",
                page: "https://ui.aceternity.com/components/hover-border-gradient"
            },
            {
                name: "multi-step-loader",
                description: "A step loader for screens that take a lot of time to load.",
                registry: "https://ui.aceternity.com/registry/multi-step-loader.json",
                page: "https://ui.aceternity.com/components/multi-step-loader"
            },
            {
                name: "3d-animated-pin",
                description: "A gradient pin that animates on hover, perfect for product links.",
                registry: "https://ui.aceternity.com/registry/3d-animated-pin.json",
                page: "https://ui.aceternity.com/components/3d-animated-pin"
            },
            {
                name: "background-boxes",
                description: "A full width background box container that highlights on hover",
                registry: "https://ui.aceternity.com/registry/background-boxes.json",
                page: "https://ui.aceternity.com/components/background-boxes"
            },
            {
                name: "background-gradient",
                description: "An animated gradient that sits at the background of a card, button or anything.",
                registry: "https://ui.aceternity.com/registry/background-gradient.json",
                page: "https://ui.aceternity.com/components/background-gradient"
            },
            {
                name: "hover-effect",
                description: "Hover over the cards and the effect slides to the currently hovered card.",
                registry: "https://ui.aceternity.com/registry/hover-effect.json",
                page: "https://ui.aceternity.com/components/hover-effect"
            },
            {
                name: "direction-aware-hover",
                description: "A direction aware hover effect using Framer Motion, Tailwindcss and good old javascript.",
                registry: "https://ui.aceternity.com/registry/direction-aware-hover.json",
                page: "https://ui.aceternity.com/components/direction-aware-hover"
            },
            {
                name: "floating-navbar",
                description: "A sticky Navbar that hides on scroll, reveals when scrolled up.",
                registry: "https://ui.aceternity.com/registry/floating-navbar.json",
                page: "https://ui.aceternity.com/components/floating-navbar"
            },
            {
                name: "following-pointer",
                description: "A custom pointer that follows mouse arrow and animates in pointer and content.",
                registry: "https://ui.aceternity.com/registry/following-pointer.json",
                page: "https://ui.aceternity.com/components/following-pointer"
            },
            {
                name: "images-slider",
                description: "A full page slider with images that can be navigated with the keyboard.",
                registry: "https://ui.aceternity.com/registry/images-slider.json",
                page: "https://ui.aceternity.com/components/images-slider"
            },
            {
                name: "navbar-menu",
                description: "A navbar menu that animates its children on hover, makes a beautiful bignav",
                registry: "https://ui.aceternity.com/registry/navbar-menu.json",
                page: "https://ui.aceternity.com/components/navbar-menu"
            },
            {
                name: "tailwind-css-buttons",
                description: "A curated list of awesome, battle tested Tailwind CSS buttons components",
                registry: "https://ui.aceternity.com/registry/tailwind-css-buttons.json",
                page: "https://ui.aceternity.com/components/tailwind-css-buttons"
            },
            {
                name: "timeline",
                description: "A timeline component with sticky header and scroll beam follow.",
                registry: "https://ui.aceternity.com/registry/timeline.json",
                page: "https://ui.aceternity.com/components/timeline"
            }
        ]
    }
} as LibraryRegistry;
