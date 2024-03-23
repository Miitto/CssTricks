export interface Section {
    name: string;
    id: string;
    subsections?: Section[];
}

export const core: Section[] = [
    {
        name: "Basic",
        id: "basic",
        subsections: [
            {
                name: "Centering",
                id: "centering",
                subsections: [
                    {
                        name: "Flexbox",
                        id: "flexbox",
                    },
                    {
                        name: "Absolute",
                        id: "absolute",
                    },
                ],
            },
        ],
    },
    {
        name: "Flex",
        id: "flex",
        subsections: [
            {
                name: "Direction",
                id: "direction",
                subsections: [
                    {
                        name: "Row",
                        id: "row",
                    },
                    {
                        name: "Column",
                        id: "column",
                    },
                    {
                        name: "Reverse",
                        id: "reverse",
                    },
                ],
            },
            {
                name: "Responsiveness",
                id: "responsiveness",
                subsections: [
                    {
                        name: "Grow",
                        id: "grow",
                    },
                    {
                        name: "Shrink",
                        id: "shrink",
                    },
                    {
                        name: "Basis",
                        id: "basis",
                    },
                ],
            },
            {
                name: "Wrap",
                id: "wrap",
                subsections: [
                    {
                        name: "Wrap",
                        id: "wrap",
                    },
                    {
                        name: "No Wrap",
                        id: "no-wrap",
                    },
                ],
            },
        ],
    },
    {
        name: "Grid",
        id: "grid",
        subsections: [
            {
                name: "Grid Template",
                id: "template",
                subsections: [
                    {
                        name: "Column",
                        id: "column",
                    },
                    {
                        name: "Row",
                        id: "row",
                    },
                    {
                        name: "Repeat",
                        id: "repeat",
                        subsections: [
                            {
                                name: "Auto Fit",
                                id: "auto-fit",
                            },
                            {
                                name: "Auto Fill",
                                id: "auto-fill",
                            },
                        ],
                    },
                    {
                        name: "Template Areas",
                        id: "areas",
                    },
                ],
            },
            {
                name: "Subgrid",
                id: "subgrid",
            },
        ],
    },
];

export const spice: Section[] = [
    {
        name: "Colors",
        id: "colors",
        subsections: [
            {
                name: "Text Gradient",
                id: "text-gradient",
            },
        ],
    },
    {
        name: "Borders",
        id: "borders",
        subsections: [
            {
                name: "Leaking",
                id: "leaking",
            },
        ],
    },
];

export const svelte: Section[] = [
    {
        name: "Sections",
        id: "sections",
        subsections: [
            {
                name: "HTML",
                id: "html",
                subsections: [
                    {
                        name: "Embedding Variables",
                        id: "vars",
                    },
                    {
                        name: "Element Directives",
                        id: "element-directives",
                        subsections: [
                            {
                                name: "Bind",
                                id: "bind",
                            },
                            {
                                name: "Class",
                                id: "class",
                            },
                            {
                                name: "On",
                                id: "on",
                            },
                        ],
                    },
                    {
                        name: "Blocks",
                        id: "blocks",
                        subsections: [
                            {
                                name: "IF",
                                id: "if",
                            },
                            {
                                name: "EACH",
                                id: "each",
                            },
                            {
                                name: "AWAIT",
                                id: "await",
                            },
                            {
                                name: "KEY",
                                id: "key",
                            },
                        ],
                    },
                    {
                        name: "Special Elements",
                        id: "special-elements",
                        subsections: [
                            {
                                name: "Slot",
                                id: "slot",
                            },
                            {
                                name: "Window",
                                id: "window",
                            },
                            {
                                name: "Head",
                                id: "head",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Script",
                id: "script",
                subsections: [
                    {
                        name: "Typescript",
                        id: "typescript",
                    },
                    {
                        name: "Variables",
                        id: "variables",
                    },
                    {
                        name: "Reactivity",
                        id: "reactivity",
                    },
                ],
            },
            {
                name: "Style",
                id: "style",
                subsections: [
                    {
                        name: "Scoped",
                        id: "scoped",
                    },
                    {
                        name: "Global",
                        id: "global",
                    },
                    {
                        name: "Preprocessors",
                        id: "preprocessor",
                    },
                    {
                        name: "External",
                        id: "external",
                    },
                ],
            },
        ],
    },
    {
        name: "Stores",
        id: "stores",
        subsections: [
            {
                name: "Derived",
                id: "derived",
            },
            {
                name: "Custom",
                id: "custom",
            },
        ],
    },
];

export const kit: Section[] = [
    {
        name: "Not Yet Added",
        id: "not-yet-added",
    },
];
