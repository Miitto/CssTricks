```svelte
<!-- Counter.svelte -->
<script lang="ts">
    import { countStore } from "./countStore";

    const count = countStore(0);
</script>

<p>{$count}</p>
<button on:click={() => count.increment()}>Increment</button>
<button on:click={() => count.decrement()}>Decrement</button>
```
