```svelte
<Modal bind:show={showNewUser}>
	<h2 slot="header">New Loan</h2>
	<form class="modal" use:enhance method="POST">
		<label for="book">Book</label>
		<!-- BookSelect component, passing the books from the page data as a prop. See component file for more information -->
		<BookSelect books={data.books} required />
		<label for="user">User</label>
		<!-- Same as with BookSelect, but with Users -->
		<UserSelect users={data.users} required />
		<label for="dueDate">Due Date</label>
		<!-- Input for the due date, required. type set to "date" for an automatic browser date picker -->
		<input type="date" name="dueDate" required />
		<div>
			<button type="submit">Create Loan</button>
		</div>
	</form>
</Modal>
```
