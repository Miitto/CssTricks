<script lang="ts">
    import Modal from "../../../Modal.svelte";
    import UserSelect from "./UserSelect.svelte";
    import BookSelect from "./BookSelect.svelte";
    import LoanList from "./LoanList.svelte";

    let nextId = 0;

    let showNewLoan = false;

    let createSuccess: boolean | null = null;

    let deleteSuccess: boolean | null = null;

    export let users = [];
    export let books = [];
    export let loans = [];

    $: lateBooks = loans.filter((l) => l.dueDate > new Date());
    $: loanedBooks = loans.filter((l) => l.dueDate <= new Date());

    function deleteLoan(loan) {
        loans = loans.filter((a) => a.id !== loan.id);
        deleteSuccess = true;
    }

    function formSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);
        const loan = formData.get("loan");
        const book = formData.get("book");
        const dueDate = formData.get("dueDate") as string;

        showNewLoan = false;
        loans = [
            ...loans,
            {
                id: nextId++,
                loanId: loan,
                bookId: book,
                dueDate: new Date(dueDate),
            },
        ];
        event.target.reset();

        createSuccess = true;
    }
</script>

{#key createSuccess}
    {#if createSuccess === true}
        <p class="notif success">Loan Successfully Created</p>
    {:else if createSuccess === false}
        <p class="notif error">Error Creating Loan</p>
    {/if}
{/key}

<div class="wrapper">
    <h2>Late Books</h2>
    <!-- Loan List component, giving the late books as the loans to show -->
    <LoanList loans={lateBooks} />
</div>
<!-- Horizontal Rule for a separator -->
<hr />
<div class="wrapper">
    <h2>Loaned Books</h2>
    <LoanList loans={loanedBooks} />
</div>
<button
    class="new"
    on:click={() => (showNewLoan = true)}
>
    +
</button>
<Modal bind:show={showNewLoan}>
    <!-- Header element set to go in the "header" slot of the Modal component -->
    <h2 slot="header">New Loan</h2>

    <!-- Form element, using enhance for async server submission without page reloads. Will POST to the current server route calling the default action -->
    <form
        class="modal"
        on:submit|preventDefault={formSubmit}
    >
        <label for="book">Book</label>
        <!-- BookSelect component, passing the books from the page data as a prop. See component file for more information -->
        <BookSelect
            {books}
            required
        />
        <label for="loan">User</label>
        <!-- Same as with BookSelect, but with Users -->
        <UserSelect
            {users}
            required
        />
        <label for="dueDate">Due Date</label>
        <!-- Input for the due date, required. type set to "date" for an automatic browser date picker -->
        <input
            type="date"
            name="dueDate"
            required
        />
        <!-- Container for button positioning -->
        <div>
            <!-- Submit button for the form, will automatically submit the form on click -->
            <button type="submit">Create Loan</button>
        </div>
    </form>
</Modal>

<style lang="scss">
    .wrapper {
        max-height: 450px !important;
        min-height: 300px !important;
    }
</style>
