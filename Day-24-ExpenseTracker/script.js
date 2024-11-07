// DOM Elements
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategorySelect = document.getElementById("expense-category");
const addExpenseButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

// Initial expense data (from local storage)
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to update total amount
function updateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalAmount.textContent = total.toFixed(2);
}

// Function to render expenses list
function renderExpenses() {
  expenseList.innerHTML = ""; // Clear current list
  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${expense.name} - ${expense.category} - $${expense.amount}</span>
      <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(li);
  });
  updateTotal();
}

// Add Expense function
addExpenseButton.addEventListener("click", () => {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());
  const category = expenseCategorySelect.value;

  if (name && !isNaN(amount) && amount > 0) {
    const newExpense = { name, amount, category };
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();

    // Clear inputs
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  } else {
    alert("Please enter valid expense details.");
  }
});

// Delete Expense function
function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

// Initial render
renderExpenses();
