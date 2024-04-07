```svelte
<div class="wrapper">
	<h2>Authors</h2>
	<ul>
		{#each authors as author (author.id)}
			<li class="author">
				<p>{author.name}</p> // [!code ++]
				<button on:click={() => deleteAuthor(author)}>Delete</button> // [!code ++]
			</li>
		{:else}
			<p>No authors</p>
		{/each}
	</ul>
</div>
```
