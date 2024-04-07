```ts
let deleteSuccess : boolean | null = null;

function deleteAuthor(author: Author) {
    authors = authors.filter((a) => a.id !== author.id);
    fetch(`/api/authors/${author.id}`, {
        method: "DELETE",
    })
        .then((res) => { // [!code ++]
            if (res.ok) { // [!code ++]
                deleteSuccess = true; // [!code ++]
            } else { // [!code ++]
                authors = data.authors; // [!code ++]
                deleteSuccess = false; // [!code ++]
            } // [!code ++]
        }) // [!code ++]
        .catch(() => { // [!code ++]
            authors = data.authors; // [!code ++]
            deleteSuccess = false; // [!code ++]
        }); // [!code ++]
}
```
