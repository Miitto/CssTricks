```svelte
<script lang="ts">
	import type { PageServerData, ActionData } from './$types';
	import { onMount } from 'svelte';
	import { title } from '$lib';
	import { Loan } from "@prisma/client";

	export let data: PageServerData;

	$: { lateBooks, loanedBooks, books, loans } = data;
	export let form: ActionData;

	onMount(() => {
		title.set('Loans');
	});

	let deleteSuccess: boolean | null = null;

	function deleteLoan(loan: Loan) {
		loans = loans.filter((a) => a.id !== loan.id);
		fetch(`/api/loans/${loan.id}`, {
			method: 'DELETE'
		})
			.then((res) => {
				if (res.ok) {
					deleteSuccess = true;
				} else {
					loans = data.loans;
					deleteSuccess = false;
				}
			})
			.catch(() => {
				loans = data.loans;
				deleteSuccess = false;
			});
	}
</script>
```
