```svelte
<script>
    let counter = 0;
    $: doubled = counter * 2; // [!code ++]
</script>
...
<h1>{counter}</h1> // [!code --]
<h1>{counter} {double}</h1> // [!code ++]
```
