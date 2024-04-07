```ts
import { prisma } from "$lib/database.server";
import type { Actions } from "./$types";

// ...

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        try {
            await prisma.author.create({
                data: {
                    title: data.get("title") as string,
                    description: data.get("description") as string,
                    author: {
                        connect: {
                            id: data.get("author") as string,
                        },
                    },
                },
            });
        } catch (error: any) {
            console.error(error);
            return {
                success: false,
            };
        }
        return {
            success: true,
        };
    },
} satisfies Actions;
```
