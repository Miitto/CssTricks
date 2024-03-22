```svelte
<!-- Parent.svelte -->
<script>
    import NamedSlot from "./Child.svelte";
</script>

<NamedSlot>
    <h1 slot="title">Title</h1>
    <p>Content</p>
</NamedSlot>

```
