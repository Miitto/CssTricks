```svelte
<!-- Parent.svelte -->
<script>
    import BasicSlot from "./Child.svelte";
</script>

<p>This is the parent component</p>
<!-- This component gives no slot content,
     so the default will be used -->
<BasicSlot />
<BasicSlot>
    <p>Overriden Slot content</p>
</BasicSlot>

<style>
    p {
        color: lime;
    }
</style>
```
