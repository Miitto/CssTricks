```svelte
<Modal bind:show={showNewAuthor}>
	<h2 slot="header">New Author</h2>
	<form class="modal" use:enhance method="POST" on:submit={() => (showNewBook = false)}>
		<label for="title">Title</label>
		<input type="text" name="title" required placeholder="Title..." />
		<label for="description">Description</label>
		<textarea name="description" required placeholder="Description..." />
		<label for="author">Author</label>
		<AuthorSelect {authors} />
		<div>
			<button type="submit">Create Book</button>
		</div>
	</form>
</Modal>
```
