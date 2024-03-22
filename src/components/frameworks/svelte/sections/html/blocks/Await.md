```svelte
<script>
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Loaded");
        }, 1000);
    });

    function reset() {
        promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Loaded");
            }, 1000);
        });
    }
</script>

{#await promise}
    <p>Loading...</p>
{:then value}
    <p>{value}</p>
{/await}
<button on:click={reset}>Reset</button>
```
