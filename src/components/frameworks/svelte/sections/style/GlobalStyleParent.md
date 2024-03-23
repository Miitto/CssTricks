```svelte
<script>
    import Child from "./Child.svelte";
</script>

<Child />

<style>
    :global(.child) {
        background-color: grey;
        color: black;
        padding: 10px;
    }
</style>
```
