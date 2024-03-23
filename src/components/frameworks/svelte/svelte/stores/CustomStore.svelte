<script lang="ts">
    import { countStore } from "./CustomStore";

    const count = countStore(0);
</script>

<p>{$count}</p>
<button on:click={() => count.increment()}>Increment</button>
<button on:click={() => count.decrement()}>Decrement</button>
