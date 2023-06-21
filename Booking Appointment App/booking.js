let form = document.getElementById('bookingForm');
let userList = document.getElementById('userList');
form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault(); // Prevent form submission to avoid page refresh
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('call').value;
    var time = document.getElementById('time').value;

    // Create a data object
        var formData = {
        Name: name,
        Mail: email,
        Phone: phone,
        Date: date,
        Time: time
        };

        // Convert the data object to a JSON string
        var formDataString = JSON.stringify(formData);

        // Store the JSON string in localStorage
        localStorage.setItem(email , formDataString);

        // To show the user details at the bottom of the form
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name} - ${email} - ${phone} - ${date} - ${time}`));

        // Add a delete button to a list
        var delBtn = document.createElement('button');
        delBtn.className = 'btn btn-info mx-2 my-2';
        delBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(delBtn);

        // Add an edit button to a list
        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-info mx-2 my-2';
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);

        // Append list to a ul
        userList.appendChild(li);

        // Add event listener to the delete button
        delBtn.addEventListener('click', function(e) {
            var li = e.target.parentElement;
            var email = li.textContent.split('-')[1].trim();
            userList.removeChild(li);
            localStorage.removeItem(email);
            form.reset();
        })
        
        
}