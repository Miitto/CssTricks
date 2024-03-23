<script>
    let value = "";
</script>

<input
    bind:value
    class:long={value.length > 5}
    placeholder="Type something over 5 letters long"
/>

<style>
    .long {
        background: green;
    }
</style>
