let form = document.getElementById('bookingForm');
let userList = document.getElementById('userList');
form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault(); // Prevent form submission to avoid page refresh
    var name = document.getElementById('name');
    var email = document.getElementById('mail');
    var phone = document.getElementById('phone');

    // Create a data object
        var formData = {
        name: name.value,
        mail: email.value,
        phone: phone.value,
        };

        // Create a post request using axios
        axios.post('https://crudcrud.com/api/c491a48aff05444d9d1013ff43c7ac9c/appointmentData', formData)
        .then(response => {
            console.log(response.data);
            showDetailsOnScreen(response.data);
        })
        .catch(err => console.log(err));
        form.reset();
}

// show appointment details on user screen
function showDetailsOnScreen(data) {
     // To show the user details at the bottom of the form
     var li = document.createElement('li');
     li.className = 'py-2';
     li.appendChild(document.createTextNode(`${data.name} - ${data.mail} - ${data.phone}`));

     // Add a delete button to a list
     var delBtn = document.createElement('button');
     delBtn.className = 'btn btn-secondary btn-sm float-right mx-2';
     delBtn.appendChild(document.createTextNode('Delete'));
     li.appendChild(delBtn);

     // Add an edit button to a list
     var editBtn = document.createElement('button');
     editBtn.className = 'btn btn-secondary btn-sm float-right mx-2';
     editBtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editBtn);

     // Append list to a ul
     userList.appendChild(li);
}

// Show appointment data on onload
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/c491a48aff05444d9d1013ff43c7ac9c/appointmentData')
    .then(response => {
        console.log(response.data);
        response.data.forEach(appointment => {
            showDetailsOnScreen(appointment);
        });
    })
    .catch(err => console.log(err));
})