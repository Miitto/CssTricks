```svelte
<script>
    function inputChange(event) {
        if (event.target.value.length > 5)
            alert("You typed something over 5 letters long");
    }
</script>

<input
    on:input={inputChange}
    placeholder="Type something over 5 letters long"
/>
<button on:click={() => alert("You clicked the button")}>
    Click Me
</button>
```
