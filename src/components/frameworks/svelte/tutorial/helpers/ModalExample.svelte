<script lang="ts">
    import Modal from "../../../../Modal.svelte";

    let show = false;
</script>

<button on:click={() => (show = true)}>Open Modal</button>
<Modal bind:show>
    <h2 slot="header">Modal Example</h2>
    <p>This is a modal dialog.</p>
    <p>
        You can find the source code for this component <a
            href="/WebRef/frameworks/svelte/tutorial/modal">here</a
        >.
    </p>
    <button on:click={() => (show = false)}>Close</button>
</Modal>
