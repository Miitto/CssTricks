```svelte
<ul class="sidebar">
	<li>
		<a href="/" class:active={$page.url.pathname == '/'}>Loans</a>
	</li>
	<li>
		<a href="/books" class:active={$page.url.pathname == '/books'}>Books</a>
	</li>
	<li>
		<a href="/users" class:active={$page.url.pathname == '/users'}>Users</a>
	</li>
	<li>
		<a href="/authors" class:active={$page.url.pathname == '/authors'}>Authors</a>
	</li>
</ul>
```