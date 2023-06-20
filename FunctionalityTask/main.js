var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter items
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item');
    var newItem1 = document.getElementById('item1');

    // Create a new li element
    var li = document.createElement('li');
    // Add class to li element
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(`${newItem.value} ${newItem1.value}`));

    // Create delete button element
    var deleteBtn = document.createElement('button');
    //Add class to the delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Add text node 
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

      // Add an edit button element
      var editBtn = document.createElement('button');
      // Add class to the edit button
      editBtn.className = "btn btn-default btn-sm float-right mx-2";
      // Add text node
      editBtn.appendChild(document.createTextNode('Edit'));
  
      // Append button to li
      li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);

    newItem.value = '';
    newItem1.value = '';
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

    // Filter an item
    function filterItems(e) {
        var text = e.target.value.toLowerCase();
        var items = document.getElementsByClassName('list-group-item');
        // Convert to an array
        Array.from(items).forEach((item) => {
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) !== -1){
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';
            }
        })
    }