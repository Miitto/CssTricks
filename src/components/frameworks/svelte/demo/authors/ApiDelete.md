```ts
import { prisma } from '$lib/database.server'; // [!code ++]
import { json } from '@sveltejs/kit';

export const DELETE = async ({ params }) => {
	try {
		await prisma.author.delete({ // [!code ++]
			where: { // [!code ++]
				id: params.id // [!code ++]
			} // [!code ++]
		}); // [!code ++]
	} catch {
		return json({ success: false });
	}
	return json({ success: true });
};
```