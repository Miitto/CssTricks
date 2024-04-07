```svelte
<script lang="ts">
	import type { PageServerData, ActionData } from './$types';
	import { onMount } from 'svelte';
	import { title } from '$lib';
	import { Book } from "@prisma/client";

	export let data: PageServerData;

	$: { books, authors } = data;
	export let form: ActionData;

	onMount(() => {
		title.set('Books');
	});

	let deleteSuccess: boolean | null = null;

	function deleteBook(book: Book) {
		books = books.filter((a) => a.id !== book.id);
		fetch(`/api/books/${book.id}`, {
			method: 'DELETE'
		})
			.then((res) => {
				if (res.ok) {
					deleteSuccess = true;
				} else {
					books = data.books;
					deleteSuccess = false;
				}
			})
			.catch(() => {
				books = data.books;
				deleteSuccess = false;
			});
	}
</script>
```
