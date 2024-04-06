```ts
import { json } from '@sveltejs/kit'; // [!code ++]

export const DELETE = async ({ params }) => {
	try {  // [!code ++]
		// ...
	} catch { // [!code ++]
		return json({ success: false }); // [!code ++]
	} // [!code ++]
	return json({ success: true }); // [!code ++]
};
```
