```svelte
<div class="wrapper">
	<h2>Users</h2>
	<ul>
		{#each users as user (user.id)}
			<li class="user">
				<p>{user.email}</p>
				<p>{user.name ?? ""}</p>
				<button on:click={() => deleteUser(user)}>Delete</button>
			</li>
		{:else}
			<p>No users</p>
		{/each}
	</ul>
</div>
```
