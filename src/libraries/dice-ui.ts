import { LibraryRegistry } from "../types";

export default {
    name: 'dice-ui',
    url: 'https://www.diceui.com',
    repository: 'https://github.com/sadmann7/diceui',
    tags: ['primitives'],
    registry: {
        components: [
            {
                "name": "checkbox-group",
                "registry": "https://diceui.com/r/checkbox-group",
                "page": "https://diceui.com/docs/components/checkbox-group"
            },
            {
                "name": "combobox",
                "registry": "https://diceui.com/r/combobox",
                "page": "https://diceui.com/docs/components/combobox"
            },
            {
                "name": "editable",
                "registry": "https://diceui.com/r/editable",
                "page": "https://diceui.com/docs/components/editable"
            },
            {
                "name": "file-upload",
                "registry": "https://diceui.com/r/file-upload",
                "page": "https://diceui.com/docs/components/file-upload"
            },
            {
                "name": "kanban",
                "registry": "https://diceui.com/r/kanban",
                "page": "https://diceui.com/docs/components/kanban"
            },
            {
                "name": "kbd",
                "registry": "https://diceui.com/r/kbd",
                "page": "https://diceui.com/docs/components/kbd"
            },
            {
                "name": "listbox",
                "registry": "https://diceui.com/r/listbox",
                "page": "https://diceui.com/docs/components/listbox"
            },
            {
                "name": "masonry",
                "registry": "https://diceui.com/r/masonry",
                "page": "https://diceui.com/docs/components/masonry"
            },
            {
                "name": "media-player",
                "registry": "https://diceui.com/r/media-player",
                "page": "https://diceui.com/docs/components/media-player"
            },
            {
                "name": "mention",
                "registry": "https://diceui.com/r/mention",
                "page": "https://diceui.com/docs/components/mention"
            },
            {
                "name": "relative-time-card",
                "registry": "https://diceui.com/r/relative-time-card",
                "page": "https://diceui.com/docs/components/relative-time-card"
            },
            {
                "name": "scroller",
                "registry": "https://diceui.com/r/scroller",
                "page": "https://diceui.com/docs/components/scroller"
            },
            {
                "name": "select",
                "registry": "https://diceui.com/r/select",
                "page": "https://diceui.com/docs/components/select"
            },
            {
                "name": "sortable",
                "registry": "https://diceui.com/r/sortable",
                "page": "https://diceui.com/docs/components/sortable",
                tags: ['dnd']
            },
            {
                "name": "tags-input",
                "registry": "https://diceui.com/r/tags-input",
                "page": "https://diceui.com/docs/components/tags-input"
            },
            {
                "name": "data-table",
                "registry": "https://diceui.com/r/data-table",
                "page": "https://diceui.com/docs/components/data-table",
                tags: ['table']
            },
            {
                "name": "data-table-filter-list",
                "registry": "https://diceui.com/r/data-table-filter-list",
                "page": "https://diceui.com/docs/components/data-table-filter-list",
                tags: ['table']
            },
            {
                "name": "data-table-filter-menu",
                "registry": "https://diceui.com/r/data-table-filter-menu",
                "page": "https://diceui.com/docs/components/data-table-filter-menu",
                tags: ['table']
            },
            {
                "name": "data-table-action-bar",
                "registry": "https://diceui.com/r/data-table-action-bar",
                "page": "https://diceui.com/docs/components/data-table-action-bar",
                tags: ['table']
            }
        ]
    },
} satisfies LibraryRegistry;