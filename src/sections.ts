export interface Section {
    name: string;
    id: string;
    subsections?: Section[];
}

export const sections: Section[] = [
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
