```svelte
<script lang="ts">
	import type { PageServerData, ActionData } from './$types';
	import { onMount } from 'svelte';
	import { title } from '$lib';
	import { User } from "@prisma/client";

	export let data: PageServerData;

	$: { users, authors } = data;
	export let form: ActionData;

	onMount(() => {
		title.set('Users');
	});

	let deleteSuccess: boolean | null = null;

	function deleteUser(user: User) {
		users = users.filter((a) => a.id !== user.id);
		fetch(`/api/users/${user.id}`, {
			method: 'DELETE'
		})
			.then((res) => {
				if (res.ok) {
					deleteSuccess = true;
				} else {
					users = data.users;
					deleteSuccess = false;
				}
			})
			.catch(() => {
				users = data.users;
				deleteSuccess = false;
			});
	}
</script>
```
