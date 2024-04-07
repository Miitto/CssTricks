```svelte
<div class="wrapper">
	<h2>Books</h2>
	<ul>
		{#each books as book (book.id)}
			<li class="book">
				<p>{book.name}</p>
				<p>{book.author?.name ?? ""}</p>
				<button on:click={() => deleteBook(book)}>Delete</button>
			</li>
		{:else}
			<p>No books</p>
		{/each}
	</ul>
</div>
```
