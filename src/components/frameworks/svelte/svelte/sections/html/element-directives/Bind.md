```svelte
<script>
    let value = "Default Value";
</script>

<input
    bind:value
    placeholder="Type Something"
/>
<p>You have typed: {value}</p>
```
