let form = document.getElementById('bookingForm');
let userList = document.getElementById('userList');
form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault(); // Prevent form submission to avoid page refresh
    var name = document.getElementById('name');
    var email = document.getElementById('mail');
    var phone = document.getElementById('phone');
    var date = document.getElementById('call');
    var time = document.getElementById('time');

    // Create a data object
        var formData = {
        Name: name.value,
        Mail: email.value,
        Phone: phone.value,
        Date: date.value,
        Time: time.value
        };

        // Convert the data object to a JSON string
        var formDataString = JSON.stringify(formData);

        // Store the JSON string in localStorage
        localStorage.setItem(email.value , formDataString);

        // To show the user details at the bottom of the form
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} - ${email.value} - ${phone.value} - ${date.value} - ${time.value}`));

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
            var mail = li.textContent.split('-')[1].trim();
            userList.removeChild(li);
            localStorage.removeItem(mail);
        })
        
        editBtn.addEventListener('click', function(e){
            var li = e.target.parentElement;
            var mail = li.textContent.split('-')[1].trim();
            var stringDetails = li.textContent.split('-'); 
            name.value = stringDetails[0].trim();
            email.value = stringDetails[1].trim();
            phone.value = stringDetails[2].trim();
            date.value = stringDetails[3].trim();
            time.value = stringDetails[4].trim();
            userList.removeChild(li);
            localStorage.removeItem(mail);
        });
        form.reset();
}