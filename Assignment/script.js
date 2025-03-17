
//To create the Object and the properties

const spending = {
    budget: 300,
    expense: 0,
    getRemaining: function() {
      return this.budget - this.expense;
    }
  };
  console.log(spending)

  //To update my input or output in UI and tofixed(i included means to number after decimal point)

  function updateDisplay() {
    document.getElementById('displayBudget').innerHTML = `Budget: $${spending.budget.toFixed(2)}`;
    document.getElementById('displayExpense').innerHTML = `Expense: $${spending.expense.toFixed(2)}`;
    document.getElementById('displayRemaining').innerHTML = `Remaining: $${spending.getRemaining().toFixed(2)}`;
  }
  

  //To display addExpenses and also the conditinal statements that are included

  function addExpense() {
    const expenseInput = parseFloat(document.getElementById('expense-input').value);
    if (expenseInput > 0 && spending.getRemaining() >= expenseInput) {
      spending.expense += expenseInput;
      updateDisplay();
      document.getElementById('expense-input').value = "";
    } else if (spending.getRemaining() < expenseInput) {
        alert("Insufficient funds!");
    } else {
      alert("Please enter a valid expense amount.");
    }
  }

  