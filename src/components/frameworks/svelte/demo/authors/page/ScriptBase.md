```svelte
<script lang="ts">
	import type { PageServerData, ActionData } from './$types';
	import { onMount } from 'svelte';
	import { title } from '$lib';
	import type { Author } from '@prisma/client';

	export let data: PageServerData;

	$: authors = data.authors;

	onMount(() => {
		title.set('Authors');
	});

	export let form: ActionData;

	let deleteSuccess: boolean | null = null;

	function deleteAuthor(author: Author) {
		authors = authors.filter((a) => a.id !== author.id);
		fetch(`/api/authors/${author.id}`, {
			method: 'DELETE'
		})
			.then((res) => {
				if (res.ok) {
					deleteSuccess = true;
				} else {
					authors = data.authors;
					deleteSuccess = false;
				}
			})
			.catch(() => {
				authors = data.authors;
				deleteSuccess = false;
			});
	}
</script>
```
