```svelte
<script>
    let value = "";
</script>

<input
    bind:value
    class:active={value.length > 5}
    placeholder="Type something over 5 letters long"
/>

<style>
    .active {
        background: green;
    }
</style>
```
