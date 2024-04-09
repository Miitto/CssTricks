```svelte
<!-- Container for late books -->
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
```
