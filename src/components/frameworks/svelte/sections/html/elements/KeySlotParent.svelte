<script>
    import KeySlot from "./KeySlotChild.svelte";
</script>

<KeySlot
    let:title={name}
    let:age
>
    <h1>{name}</h1>
    <p>{age}</p>
</KeySlot>
