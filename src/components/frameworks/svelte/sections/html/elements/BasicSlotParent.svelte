<script>
    import BasicSlot from "./BasicSlotChild.svelte";
</script>

<p>This is the parent component</p>
<hr />
<BasicSlot />
<hr />
<BasicSlot>
    <p>Overriden Slot content</p>
</BasicSlot>
<hr />

<style>
    p {
        color: lime;
    }
</style>
