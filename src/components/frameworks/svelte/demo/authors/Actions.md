```ts
import { prisma } from "$lib/database.server";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async () => {
    let authors = await prisma.author.findMany();

    return {
        authors,
    };
};

export const actions = { // [!code ++]
    default: async ({ request }) => { // [!code ++]
        const data = await request.formData(); // [!code ++]
        try { // [!code ++]
            await prisma.author.create({ // [!code ++]
                data: { // [!code ++]
                    name: data.get("name") as string, // [!code ++]
                }, // [!code ++]
            }); // [!code ++]
        } catch (error: any) { // [!code ++]
            console.error(error); // [!code ++]
            return { // [!code ++]
                success: false, // [!code ++]
            }; // [!code ++]
        } // [!code ++]
        return { // [!code ++]
            success: true, // [!code ++]
        }; // [!code ++]
    }, // [!code ++]
} satisfies Actions; // [!code ++]
```
