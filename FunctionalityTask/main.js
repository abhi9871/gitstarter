var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Add Item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    // Create a new li element
    var li = document.createElement('li');
    // Add class to li element
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Add an edit button element
    var editBtn = document.createElement('button');
    // Add class to the edit button
    editBtn.className = "btn btn-default btn-sm float-right mx-2";
    // Add text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append button to li
    li.appendChild(editBtn);

    // Create delete button element
    var deleteBtn = document.createElement('button');
    //Add class to the delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Add text node 
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

}

    // Delete an item
    function removeItem(e) {
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            }
        }
    }