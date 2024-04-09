```ts
import { prisma } from "$lib/database.server";
import type { Actions } from "./$types";

// ...

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		try {
			const loan = await prisma.loan.create({
				data: {
					userId: data.get('user') as string,
					bookId: data.get('book') as string,
					dueDate: new Date(data.get('dueDate') as string)
				}
			});
		} catch (error: any) {
			console.error(error);
			return {
				success: false
			};
		}

		return {
			success: true
		};
	}
}; satisfies Actions;
```
