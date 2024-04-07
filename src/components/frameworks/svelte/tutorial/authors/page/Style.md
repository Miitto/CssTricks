```scss
<style lang="scss">
	.wrapper {
		/* Set the wrapper to stack vertically with a gap of 1em between children */
		display: flex;
		flex-direction: column;
		gap: 1em;

		> ul {
			// Set the list to stack vertically with a gap of 0.5em
			gap: 0.5em;
			display: flex;
			flex-direction: column;
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
</style>
```
