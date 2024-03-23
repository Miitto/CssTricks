```ts
// countStore.ts
import { writable } from "svelte/store";

export function countStore(value: number) {
    const { subscribe, update } = writable(value);

    function increment() {
        update((n) => n + 1);
    }

    function decrement() {
        update((n) => n - 1);
    }

    return {
        subscribe,
        increment,
        decrement,
    };
}
```
