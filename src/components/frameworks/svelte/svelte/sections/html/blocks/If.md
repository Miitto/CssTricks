```svelte
<script>
    let show = false;
</script>

<input
    type="checkbox"
    bind:checked={show}
/>
<p>
    {#if show}
        Shown
    {:else}
        Hidden
    {/if}
</p>
```
