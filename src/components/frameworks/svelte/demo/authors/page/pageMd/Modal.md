```svelte
<Modal bind:show={showNewAuthor}>
	<h2 slot="header">New Author</h2>
	<form class="modal" use:enhance method="POST" on:submit={() => (showNewAuthor = false)}> // [!code ++]
		<label for="author">Name</label> // [!code ++]
		<input type="text" name="name" required placeholder="Name..." /> // [!code ++]
		<div> // [!code ++]
			<button type="submit">Create Author</button> // [!code ++]
		</div> // [!code ++]
	</form>
</Modal>
```
