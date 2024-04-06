```ts
// +page.server.ts
import { prisma } from "$lib/database.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const authors = await prisma.authors.findMany(); // [!code ++]

    return {
        authors, // [!code ++]
    };
};
```
