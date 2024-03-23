<script>
    let lastClick = null;
    function handleClick(event) {
        lastClick = event.target;
    }
</script>

<svelte:window on:click={handleClick} />

<p>
    {#if lastClick}
        You clicked a: &lt;{lastClick?.tagName.toLowerCase()}&gt element;
    {:else}
        Click anywhere to populate the last clicked element.
    {/if}
</p>
