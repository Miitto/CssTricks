```svelte
<script>
    let array = ["Item One", "Item Two", "Item 3"];
</script>

{#each array as item, index}
    <p>({index}) {item}</p>
{/each}
```
