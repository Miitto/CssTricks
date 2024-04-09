```ts
import { prisma } from "$lib/database.server";
import type { Actions } from "./$types";

// ...

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        try {
            await prisma.user.create({
                data: {
                    name: data.get("name") ?? undefined,
                    email: data.get("email"),
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
