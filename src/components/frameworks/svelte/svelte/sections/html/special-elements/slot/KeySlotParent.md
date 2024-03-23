```svelte
<!-- Parent.svelte -->
<script>
    import KeySlot from "./Child.svelte";
</script>

<KeySlot
    let:title={name}
    let:age
>
    <h1>{name}</h1>
    <p>{age}</p>
</KeySlot>
```
