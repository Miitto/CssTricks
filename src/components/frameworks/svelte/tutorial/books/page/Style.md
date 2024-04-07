```scss
<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;

		> ul {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		}
	}

	.book {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		gap: 1em;
		max-height: 2em;
		flex-wrap: wrap;
	}

	.modal {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 1em;

		> div {
			grid-column: span 2;
			display: flex;
			justify-content: flex-end;
		}
	}

	small {
		text-overflow: ellipsis;
	}
</style>
```
