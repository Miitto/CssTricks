```svelte
<Modal bind:show={showNewUser}>
	<h2 slot="header">New User</h2>
	<form class="modal" use:enhance method="POST" on:submit={() => (showNewUser = false)}>
		<label for="email">Email</label>
		<input type="text" name="email" required placeholder="Title..." />
		<label for="name">Name</label>
		<input name="name" placeholder="Name..." />
	</form>
</Modal>
```
