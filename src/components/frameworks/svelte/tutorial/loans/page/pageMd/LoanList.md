```ts
// src/lib/index.ts
export function formatDate(date: Date) {
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        weekday: "short",
    });
}
```

```svelte
<!-- src/lib/components/LoanList.svelte -->
<script lang="ts">
    // import a helper function to format a date, shown above
	import { formatDate } from '$lib';
	import type { Prisma } from '@prisma/client';

    // Create a Loan type using Prisma types where book and authors are included
	type Loan = Prisma.LoanGetPayload<{
		include: { book: { include: { author: true } } };
	}>;

    // Take a list of loans as a prop
	export let loans: Loan[] = [];

    // function to return a book
	function returnBook(loan: Loan) {
        // Send request to the server to delete the loan with id of loan.id
		fetch(`/api/loans/${loan.id}`, {
			method: 'DELETE'
		}).then((res) => {
			if (res.ok) {
				deleteSuccess = true;
                // We are not storing a separate list of loans for simplicity, so only filter the loans on success
				loans = loans.filter((l) => l.id !== loan.id);
			} else {
				deleteSuccess = false;
			}
		});
	}

	let deleteSuccess: boolean | null = null;
</script>

<ul>
    <!-- Iterate over the loans list -->
	{#each loans as loan (loan.id)}
		<li class="book">
			<h2>{loan.book.title}</h2>
			<p>{loan.book.author.name}</p>
            <!-- Format the loan date -->
			<p>{formatDate(loan.dueDate)}</p>
            <!-- Call returnBook on click, and pass the loan as a parameter -->
			<button on:click={() => returnBook(loan)}>Return</button>
		</li>
	{:else}
        <!-- Show this content of there are no loans -->
		<p>No loaned books</p>
	{/each}
</ul>

<!-- Notification for deleting a loan -->
{#key deleteSuccess}
	{#if deleteSuccess === true}
		<p class="notif success">Book Successfully Returned</p>
	{:else if deleteSuccess === false}
		<p class="notif error">Error Returning Book</p>
	{/if}
{/key}

<style lang="scss">
	ul {
		gap: 0.5em;
		display: flex;
		flex-direction: column;

		li {
			display: flex;
			align-items: baseline;
			gap: 0.5em;

            /* Set the 2nd lat child to fill remaining space */
			p:nth-last-child(2) {
				flex: 1;
			}
		}
	}
</style>
```
