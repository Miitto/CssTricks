<script lang="ts">
    let active = "Loans";
    import "./styles.scss";
</script>

<div class="wrapper">
    <div class="titlebar"><h1>Library</h1></div>
    <ul class="sidebar">
        <li>
            <a
                on:click|preventDefault={() => (active = "Loans")}
                class:active={active.startsWith("Loans")}>Loans</a
            >
        </li>
        <li>
            <a
                on:click|preventDefault={() => (active = "Books")}
                class:active={active.startsWith("Books")}>Books</a
            >
        </li>
        <li>
            <a
                on:click|preventDefault={() => (active = "Users")}
                class:active={active.startsWith("Users")}>Users</a
            >
        </li>
        <li>
            <a
                on:click|preventDefault={() => (active = "Authors")}
                class:active={active.startsWith("Authors")}>Authors</a
            >
        </li>
    </ul>
    <main></main>
</div>

<style lang="scss">
    .wrapper {
        position: relative;
        height: fit-content;
        min-height: 500px;
        border: 1px solid #5555;
        overflow: hidden;
    }

    .titlebar {
        background-color: #222;
        height: 50px;
        width: 100%;
        padding: 0.5rem 1rem;

        h1 {
            margin: 0;
            height: fit-content;
            line-height: 1;
        }
    }

    .sidebar {
        background-color: #222;
        height: calc(100% - 50px);
        width: 200px;
        position: absolute;
        top: 50px;
        left: 0;
        display: flex;
        flex-direction: column;
        list-style: none;

        a {
            padding: 0.5rem 1rem;
            display: inline-block;
            width: 100%;
            color: white;
            text-decoration: none;

            &.active {
                background-color: #333;
            }

            &:hover {
                background-color: #333;
            }
        }
    }

    main {
        margin-left: 200px;
        padding: 20px;
    }
</style>
