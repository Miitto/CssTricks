<script lang="ts">
    let count = 0;
    $: double = count * 2;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<h1>{count} {double}</h1>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>
