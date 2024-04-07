<script lang="ts">
    import Modal from "../../../../Modal.svelte";

    let nextId = 0;

    let showNewAuthor = false;

    let createSuccess: boolean | null = null;

    let deleteSuccess: boolean | null = null;

    export let authors = [];

    function deleteAuthor(author) {
        authors = authors.filter((a) => a.id !== author.id);
        deleteSuccess = true;
    }

    function formSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get("name");

        showNewAuthor = false;
        authors = [...authors, { name, id: nextId++ }];
        event.target.reset();

        createSuccess = true;
    }
</script>

{#key createSuccess}
    {#if createSuccess === true}
        <p class="notif success">Author Successfully Created</p>
    {:else if createSuccess === false}
        <p class="notif error">Error Creating Author</p>
    {/if}
{/key}
{#key deleteSuccess}
    {#if deleteSuccess === true}
        <p class="notif success">Author Successfully Deleted</p>
    {:else if deleteSuccess === false}
        <p class="notif error">Error Deleting Author</p>
    {/if}
{/key}

<div class="wrapper">
    <h2>Authors</h2>
    <ul>
        {#each authors as author (author.id)}
            <li class="author">
                <p>{author.name}</p>
                <button on:click={() => deleteAuthor(author)}>Delete</button>
            </li>
        {:else}
            <p>No authors</p>
        {/each}
    </ul>
</div>
<button
    class="new"
    on:click={() => (showNewAuthor = true)}
>
    +
</button>
<Modal bind:show={showNewAuthor}>
    <h2 slot="header">New Author</h2>
    <form
        class="modal"
        on:submit|preventDefault={formSubmit}
    >
        <label for="author">Name</label>
        <input
            type="text"
            name="name"
            required
            placeholder="Name..."
        />
        <div>
            <button type="submit">Create Author</button>
        </div>
    </form>
</Modal>

<style lang="scss">
    .wrapper {
        /* Set the wrapper to stack vertically with a gap of 1em between children */
        display: flex;
        flex-direction: column;
        gap: 1em;
        min-height: 600px;
        max-height: 900px;
        overflow: hidden;

        > ul {
            // Set the list to stack vertically with a gap of 0.5em
            gap: 0.5em;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }
    }

    .author {
        // Set the author list items to stack horizontally, and to vertically center children
        display: flex;
        align-items: center;

        p {
            /* Make any p children of authors take up all available space */
            flex: 1;
        }
    }

    .modal {
        /* Set the modal to display as a grid with two columns, one automatically sized, and the other to take up remaining space */
        display: grid;
        grid-template-columns: auto 1fr;
        // Vertically align children to the center
        align-items: center;

        // Set the gap between children to 1em
        gap: 1em;

        > div {
            // Set the div to span two columns, and to align children to the end
            // This will make the button right aligned in the modal
            grid-column: span 2;
            display: flex;
            justify-content: flex-end;
        }
    }

    // Default styling for interactive elements
    input,
    button {
        // 0.5em vertical padding, 1em horizontal padding
        padding: 0.5em 1em;
        border: 1px solid #5555;
        border-radius: 5px;
        background: #222;
        color: white;

        &:focus {
            outline: none;
            border-color: #007bff;
        }

        &:hover {
            filter: brightness(1.2);
        }

        &:active {
            filter: brightness(0.8);
        }
    }

    // Styling for the notification
    .notif {
        // Set the position to fixed, so the notification stays in the same place on the screen, 20px from the bottom and 20px from the left
        position: absolute;
        bottom: 20px;
        left: 20px;

        // Set width to fit the text, with 50% of the font size as padding
        width: fit-content;
        padding: 0.5em;

        // Set background color to be black, with low opacity
        background: #0005;

        // Style the border, 1px thick border of semi transparent grey with 5px radius corners
        border-radius: 5px;
        border: 1px solid #5555;

        // Disable pointer events, so the notification cannot be clicked - allows for elements behind it to be clicked
        pointer-events: none;

        // Delay the fade out animation by 5 seconds, then fade out over 1 second
        animation: fadeOut 1s 5s forwards;

        // If the element also has the success class, make the background green
        &.success {
            background: #0c93;
        }

        // If the element also has the error class, make the background red
        &.error {
            background: #c003;
        }
    }

    // Keyframes for the fade out animation, from opacity 1 to 0
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    // Styling for the new button
    .new {
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 60px;
        height: 60px;
        background-color: #0c9;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        font-size: 30px;
        border: none;
        padding: 0;

        /* Gives the button a 3D effect */
        box-shadow:
            -1px -1px 1px #000 inset,
            1px 1px 1px #fff inset;
        /* Inverts the 3D effect when the button is clicked, to make it appear pushed */
        &:active {
            box-shadow:
                1px 1px 1px #000 inset,
                -1px -1px 1px #fff inset;
        }
    }
</style>
