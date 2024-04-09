```ts
import { prisma } from "$lib/database.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const users = await prisma.user.findMany(); // [!code ++]

    return {
        users, // [!code ++]
    };
};
```
