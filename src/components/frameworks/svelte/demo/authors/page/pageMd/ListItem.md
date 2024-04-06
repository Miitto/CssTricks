```svelte
<div class="wrapper">
	<h2>Authors</h2>
	<ul>
		{#each authors as author (author.id)} // [!code ++]
			<li class="author"> // [!code ++]
                <!-- ... --> // [!code ++]
			</li> // [!code ++]
		{:else} // [!code ++]
			<p>No authors</p> // [!code ++]
		{/each} // [!code ++]
	</ul>
</div>
```
