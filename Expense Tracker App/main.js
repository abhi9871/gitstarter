let form = document.getElementById('expenseForm');
let displayExpense = document.getElementById('expenseDetails');
let isEditing = false; // Flag to indicate if we are editing an expense details or not
form.addEventListener('submit', addExpense);

// Add expense
 function addExpense(e) {
    e.preventDefault(); // Prevent form submission to avoid page refresh
    let expenseAmount = document.getElementById('expenseAmount');
    let expenseDescription = document.getElementById('expenseDescription');
    let expenseCategory = document.getElementById('expenseCategory');

    // Create expense data object
    let expenseData = {
        expenseAmount : expenseAmount.value,
        expenseDescription : expenseDescription.value,
        expenseCategory : expenseCategory.value 
    }

    if(isEditing) {
        // Updating an expense details
        let expenseId = form.getAttribute('expenseId');
        let li = document.getElementById(expenseId);
        li.firstChild.textContent = `\u20B9${expenseData.expenseAmount} - ${expenseData.expenseCategory} - ${expenseData.expenseDescription}`
        editExpense(expenseId, expenseData);
    } else {
        // Create an expense
        createExpense(expenseData);
    }
    form.reset();
}

// Show expense details on user screen
function showExpenseDetails(expenseData) {
    // Create a list element
    let li = document.createElement('li');

    li.className = 'py-2';

    // set an id attribute for li element
    li.setAttribute('id', expenseData.id);

    // Create textNode for li and append to it
    li.appendChild(document.createTextNode(`\u20B9${expenseData.amount} - ${expenseData.category} - ${expenseData.description}`));

    // Add edit expense button
    let editBtn = document.createElement('button');

    editBtn.className = 'btn btn-secondary btn-sm float-right mx-2';

    editBtn.appendChild(document.createTextNode('Edit Expense'));

    li.appendChild(editBtn);

    // Add delete expense button
    let deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-secondary btn-sm float-right mx-2';

    deleteBtn.appendChild(document.createTextNode('Delete Expense'));

    li.appendChild(deleteBtn);

    // Append li to ul
    displayExpense.appendChild(li);

    // Edit an expense
    editBtn.addEventListener('click', (e) => {
        let li = e.target.parentElement;
        let expenseId = li.getAttribute('id');
        form.setAttribute('expenseId', expenseId);
        getExpense(expenseId);
    })

    // Delete an expense
    deleteBtn.addEventListener('click', (e) => {
        let li = e.target.parentElement;
        let expenseId = li.getAttribute('id');
        displayExpense.removeChild(li);
        deleteExpense(expenseId);
    });
}

// get all the expenses
async function getExpenses() {
    try {
        const expenses = await axios.get('http://localhost:3000/expense/get-expenses');
        const expensesData = expenses.data;
        expensesData.forEach((expense) => {
            showExpenseDetails(expense);
        });
    } catch (err) {
        console.log(err);
    }
}

// get an expense by id
async function getExpense(expenseId) {
    try {
        isEditing = true;
        let expenseAmount = document.getElementById('expenseAmount');
        let expenseDescription = document.getElementById('expenseDescription');
        let expenseCategory = document.getElementById('expenseCategory');

      const expense = await axios.get(`http://localhost:3000/expense/get-expense/${expenseId}`);
      expenseAmount.value = expense.data.amount;
      expenseCategory.value = expense.data.category;
      expenseDescription.value = expense.data.description;
    } catch (err) {
        console.log(err);
    }
}

// create an expense
async function createExpense(expenseData) {
    try {
        const expense = await axios.post('http://localhost:3000/expense/create-expense', expenseData);
        console.log(expense.data);
        showExpenseDetails(expense.data);
    } catch (err) {
        console.log(err);
    }
}

// edit an expense
async function editExpense(expenseId, expenseData) {
    try {
        isEditing = false;
        const updatedExpense = await axios.put(`http://localhost:3000/expense/edit-expense/${expenseId}`, expenseData);
        console.log(updatedExpense.data);
    } catch (err) {
       console.log(err); 
    }
}

// delete an expense
async function deleteExpense(expenseId) {
    try {
        const deletedExpense = await axios.delete(`http://localhost:3000/expense/delete-expense/${expenseId}`);
        console.log('Expense deleted');
    } catch (err) {
        console.log(err);
    }
}

// Show expense data on onload
window.addEventListener("DOMContentLoaded", getExpenses);