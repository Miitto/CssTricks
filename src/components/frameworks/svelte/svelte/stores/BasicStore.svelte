<script>
    import { writable } from "svelte/store";
    import { onMount, onDestroy } from "svelte";

    // Create a store with an initial value of 0
    const count = writable(0);

    let unsubscribe; // Hold unsubscribe function to unsubscribe when the component unmounts

    let pageLoaded = false;

    // Subscribe to the store
    onMount(() => {
        unsubscribe = count.subscribe((value) => {
            if (pageLoaded) alert(value);
        });
        pageLoaded = true;
    });

    // Unsubscribe when the component unmounts
    onDestroy(() => {
        if (unsubscribe) unsubscribe();
    });

    // Update the store value, can also be done in .js/ts files.
    function increment() {
        count.update((value) => value + 1);
    }

    // Set the store value, can also be done in .js/ts files.
    function setTen() {
        count.set(10);
    }

    // Update the store value, can only be done in .svelte files.
    function decrement() {
        $count -= 1;
    }

    // Set the store value, can only be done in .svelte files.
    function setZero() {
        $count = 0;
    }
</script>

<p>{$count}</p>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>
<button on:click={setTen}>Set Ten</button>
<button on:click={setZero}>Set Zero</button>
