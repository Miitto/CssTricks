```svelte
<script>
    let y;
</script>

<svelte:window bind:innerHeight={y} />

<p>
    Your screen is {y}px tall.
</p>
```
