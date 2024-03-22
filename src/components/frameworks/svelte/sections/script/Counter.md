```svelte
<script>
    let counter = 0;

    function increment() {
          counter += 1;
        }

    function decrement() {
          counter -= 1;
        }
</script>
<h1>{counter}</h1>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>
```
