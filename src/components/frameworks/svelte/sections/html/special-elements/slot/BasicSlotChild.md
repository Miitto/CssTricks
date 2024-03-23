```svelte
<!-- Child.svelte -->
<p>
    This is in the child component, and is outside the slot so will always be
    present
</p>
<slot>
    <p>
        This is some optional default content. If there's no default content,
        the slot can be written as &lt;slot /&gt;
    </p>
</slot>
```
