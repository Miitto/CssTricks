<script>
    import { onMount } from "svelte";

    // So that the alert doesn't show on page load
    let firstMount = true;
    onMount(() => {
        firstMount = false;
    });

    let key = false;

    function onCreate() {
        if (!firstMount) alert("Key block has been re-created");
    }
</script>

{#key key}
    <button
        on:click={() => (key = !key)}
        use:onCreate>Change Key</button
    >
{/key}
