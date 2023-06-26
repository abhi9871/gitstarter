let form = document.getElementById('expenseForm');
let displayExpense = document.getElementById('expenseDetails');

form.addEventListener('submit', addExpense);

// Add expense
function addExpense(e) {
    e.preventDefault(); // Prevent form submission to avoid page refresh
    let expenseAmout = document.getElementById('expenseAmount');
    let expenseDescription = document.getElementById('expenseDescription');
    let expenseCategory = document.getElementById('expenseCategory');

    // Create expense data object
    let expenseData = {
        amount : expenseAmout.value,
        descripton : expenseDescription.value,
        category : expenseCategory.value 
    }

    // Convert the expense data object to a JSON string
    let expenseStringData = JSON.stringify(expenseData);

    //Create a key for localStorage
    let expenseKey = generateExpenseKey();

    // Store into local storage
    localStorage.setItem(expenseKey, expenseStringData);

    // Create a list element
    let li = document.createElement('li');

    // Add attribute to the list
    li.setAttribute('data-key', expenseKey);

    li.className = 'py-2';

    // Create textNode for li and append to it
    li.appendChild(document.createTextNode(`${expenseData.amount} - ${expenseData.category} - ${expenseData.descripton}`));

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
    editBtn.addEventListener('click', function(e){
        let li = e.target.parentElement;
        let key = li.getAttribute('data-key');
        var stringDetails = li.firstChild.textContent.split('-'); 
        expenseAmout.value = stringDetails[0].trim();
        expenseCategory.value = stringDetails[1].trim();
        expenseDescription.value = stringDetails[2].trim();

        displayExpense.removeChild(li);
        localStorage.removeItem(key);
    })

    // Delete an expense
    deleteBtn.addEventListener('click', function(e){
        let li = e.target.parentElement;
        let key = li.getAttribute('data-key');
        displayExpense.removeChild(li);
        localStorage.removeItem(key);
    })

    form.reset();

}

// Create expense key function for generating dynamic keys for each entry

function generateExpenseKey(){
    let timestamp = new Date().getTime();
    return `expense_${timestamp}`;
}