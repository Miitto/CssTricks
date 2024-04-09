<script lang="ts">
    import Modal from "../../../../Modal.svelte";
    import AuthorSelect from "../AuthorSelect.svelte";

    let nextId = 0;

    let showNewBook = false;

    let createSuccess: boolean | null = null;

    let deleteSuccess: boolean | null = null;

    export let books = [];
    export let authors = [];

    function deleteBook(book) {
        books = books.filter((a) => a.id !== book.id);
        deleteSuccess = true;
    }

    function formSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const authorId = formData.get("author");

        const author = authors.find((a) => a.id === authorId);

        showNewBook = false;
        books = [...books, { name, id: nextId++, author }];
        event.target.reset();

        createSuccess = true;
    }
</script>

{#key createSuccess}
    {#if createSuccess === true}
        <p class="notif success">Book Successfully Created</p>
    {:else if createSuccess === false}
        <p class="notif error">Error Creating Book</p>
    {/if}
{/key}
{#key deleteSuccess}
    {#if deleteSuccess === true}
        <p class="notif success">Book Successfully Deleted</p>
    {:else if deleteSuccess === false}
        <p class="notif error">Error Deleting Book</p>
    {/if}
{/key}

<div class="wrapper">
    <h2>Books</h2>
    <ul>
        {#each books as book (book.id)}
            <li class="book">
                <p>{book.name}</p>
                <p>{book.author?.name ?? ""}</p>
                <button on:click={() => deleteBook(book)}>Delete</button>
            </li>
        {:else}
            <p>No books</p>
        {/each}
    </ul>
</div>
<button
    class="new"
    on:click={() => (showNewBook = true)}
>
    +
</button>
<Modal bind:show={showNewBook}>
    <h2 slot="header">New Book</h2>
    <form
        class="modal"
        on:submit|preventDefault={formSubmit}
    >
        <label for="title">Title</label>
        <input
            type="text"
            name="title"
            required
            placeholder="Title..."
        />
        <label for="description">Description</label>
        <textarea
            name="description"
            required
            placeholder="Description..."
        />
        <label for="author">Author</label>
        <AuthorSelect
            bind:authors
            required
        />
        <div>
            <button type="submit">Create Book</button>
        </div>
    </form>
</Modal>
