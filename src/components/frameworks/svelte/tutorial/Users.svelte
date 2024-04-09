<script lang="ts">
    import Modal from "../../../Modal.svelte";

    let nextId = 0;

    let showNewUser = false;

    let createSuccess: boolean | null = null;

    let deleteSuccess: boolean | null = null;

    export let users = [];

    function deleteUser(user) {
        users = users.filter((a) => a.id !== user.id);
        deleteSuccess = true;
    }

    function formSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get("name") ?? "";
        const email = formData.get("email");

        showNewUser = false;
        users = [...users, { name, id: nextId++, email }];
        event.target.reset();

        createSuccess = true;
    }
</script>

{#key createSuccess}
    {#if createSuccess === true}
        <p class="notif success">User Successfully Created</p>
    {:else if createSuccess === false}
        <p class="notif error">Error Creating User</p>
    {/if}
{/key}
{#key deleteSuccess}
    {#if deleteSuccess === true}
        <p class="notif success">User Successfully Deleted</p>
    {:else if deleteSuccess === false}
        <p class="notif error">Error Deleting User</p>
    {/if}
{/key}

<div class="wrapper">
    <h2>Users</h2>
    <ul>
        {#each users as user (user.id)}
            <li class="user">
                <p>{user.email}</p>
                <p>{user.name}</p>
                <button on:click={() => deleteUser(user)}>Delete</button>
            </li>
        {:else}
            <p>No users</p>
        {/each}
    </ul>
</div>
<button
    class="new"
    on:click={() => (showNewUser = true)}
>
    +
</button>
<Modal bind:show={showNewUser}>
    <h2 slot="header">New User</h2>
    <form
        class="modal"
        on:submit|preventDefault={formSubmit}
    >
        <label for="email">Email</label>
        <input
            type="text"
            name="email"
            required
            placeholder="Email..."
        />
        <label for="name">Name</label>
        <input
            name="name"
            placeholder="Name..."
        />
        <div>
            <button type="submit">Create User</button>
        </div>
    </form>
</Modal>
