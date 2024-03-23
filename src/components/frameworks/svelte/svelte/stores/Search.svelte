<script>
    import { writable, derived } from "svelte/store";

    const list = writable(["Item One", "Item Two", "Item Three"]);
    const searchText = writable("");

    const filteredList = derived([list, searchText], ([$list, $searchText]) => {
        return $list.filter((item) =>
            item.toLowerCase().includes($searchText.toLowerCase())
        );
    });
</script>

<input
    bind:value={$searchText}
    placeholder="Search"
/>
{#each $filteredList as item}
    <div>{item}</div>
{/each}
