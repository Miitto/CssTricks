export interface Section {
    name: string;
    id: string;
    subsections?: Section[];
}

export const css: { [key: string]: Section[] } = {
    core: [
        {
            name: "Basic",
            id: "basic",
            subsections: [
                {
                    name: "Properties",
                    id: "properties",
                    subsections: [
                        {
                            name: "Display",
                            id: "display",
                            subsections: [
                                {
                                    name: "Block",
                                    id: "block",
                                },
                                {
                                    name: "Inline",
                                    id: "inline",
                                },
                                {
                                    name: "Inline Block",
                                    id: "inline-block",
                                },
                                {
                                    name: "Flex",
                                    id: "flex",
                                },
                                {
                                    name: "Grid",
                                    id: "grid",
                                },
                            ],
                        },
                        {
                            name: "Position",
                            id: "position",
                            subsections: [
                                {
                                    name: "Static",
                                    id: "static",
                                },
                                {
                                    name: "Relative",
                                    id: "relative",
                                },
                                {
                                    name: "Absolute",
                                    id: "absolute",
                                },
                                {
                                    name: "Sticky",
                                    id: "sticky",
                                },
                                {
                                    name: "Fixed",
                                    id: "fixed",
                                },
                            ],
                        },
                        {
                            name: "Overflow",
                            id: "overflow",
                            subsections: [
                                {
                                    name: "Auto",
                                    id: "auto",
                                },
                                {
                                    name: "Visible",
                                    id: "visible",
                                },
                                {
                                    name: "Hidden",
                                    id: "hidden",
                                },
                                {
                                    name: "Scroll",
                                    id: "scroll",
                                },
                                {
                                    name: "Clip",
                                    id: "clip",
                                },
                            ],
                        },
                    ],
                },
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
                    name: "Positioning",
                    id: "positioning",
                    subsections: [
                        {
                            name: "Justify",
                            id: "justify",
                        },
                        {
                            name: "Align",
                            id: "align",
                        },
                        {
                            name: "Gap",
                            id: "gap",
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
    ],
    spice: [
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
    ],
};

export const svelte: { [key: string]: Section[] } = {
    svelte: [
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
    ],
    kit: [
        {
            name: "Project",
            id: "project",
            subsections: [
                {
                    name: "Folder Structure",
                    id: "structure",
                    subsections: [
                        {
                            name: ".svelte-kit",
                            id: "svelte-kit",
                        },
                        {
                            name: "src",
                            id: "src",
                            subsections: [
                                {
                                    name: "lib",
                                    id: "lib",
                                },
                                {
                                    name: "params",
                                    id: "params",
                                },
                                {
                                    name: "routes",
                                    id: "routes",
                                },
                                {
                                    name: "app.html",
                                    id: "app",
                                },
                                {
                                    name: "hooks.server.js",
                                    id: "hooks",
                                },
                            ],
                        },
                        {
                            name: "static",
                            id: "static",
                        },
                        {
                            name: ".env",
                            id: "env",
                        },
                        {
                            name: "package.json",
                            id: "package",
                        },
                        {
                            name: "svelte.config.js",
                            id: "svelte-config",
                        },
                        {
                            name: "tsconfig.json",
                            id: "tsconfig",
                        },
                        {
                            name: "vite.config.js",
                            id: "vite",
                        },
                    ],
                },
                {
                    name: "Special Files",
                    id: "files",
                    subsections: [
                        {
                            name: "+page.svelte",
                            id: "page-svelte",
                        },
                        {
                            name: "+page.js",
                            id: "page-js",
                        },
                        {
                            name: "+layout.svelte",
                            id: "layout-svelte",
                        },
                        {
                            name: "+layout.js",
                            id: "layout-js",
                        },
                        {
                            name: "+error.svelte",
                            id: "error",
                        },
                        {
                            name: "+server.js",
                            id: "server",
                        },
                    ],
                },
            ],
        },
    ],
    demo: [
        {
            name: "Initial Setup",
            id: "setup",
            subsections: [
                {
                    name: "Create Project",
                    id: "create",
                },
                {
                    name: "Add Prisma",
                    id: "prisma",
                },
                {
                    name: "Create Models",
                    id: "models",
                    subsections: [
                        {
                            name: "Author",
                            id: "author",
                        },
                        {
                            name: "Book",
                            id: "book",
                        },
                        {
                            name: "User",
                            id: "user",
                        },
                        {
                            name: "Loan",
                            id: "loan",
                        },
                    ],
                },
            ],
        },
        {
            name: "Layout",
            id: "layout",
            subsections: [
                {
                    name: "Titlebar",
                    id: "title",
                    subsections: [
                        {
                            name: "Title Store",
                            id: "store",
                        },
                        {
                            name: "HTML",
                            id: "html",
                        },
                        {
                            name: "Style",
                            id: "style",
                        },
                    ],
                },
                {
                    name: "Sidebar",
                    id: "sidebar",
                    subsections: [
                        {
                            name: "Navigation",
                            id: "nav",
                        },
                        {
                            name: "Style",
                            id: "style",
                        },
                    ],
                },
                {
                    name: "Content",
                    id: "content",
                },
            ],
        },
        {
            name: "Routes",
            id: "routes",
            subsections: [
                {
                    name: "Pages",
                    id: "pages",
                },
                {
                    name: "API",
                    id: "api",
                },
            ],
        },
    ],
};
