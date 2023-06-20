let form = document.getElementById('bookingForm');
form.addEventListener('submit', submitForm);

function submitForm(event){
    // event.preventDefault(); // Prevent form submission to avoid page refresh
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('call').value;
    var time = document.getElementById('time').value;
    
    // One way to store data into local storage
    // localStorage.setItem('name', name);
    // localStorage.setItem('mail', email);
    // localStorage.setItem('phone', phone);
    // localStorage.setItem('call', date);
    // localStorage.setItem('time', time);

    // Second way to store data into local storage
    // Create a data object
        // var formData = {
        // Name: name,
        // Mail: email,
        // Phone: phone,
        // Date: date,
        // Time: time
        // };

        // // Convert the data object to a JSON string
        // var formDataString = JSON.stringify(formData);

        // // Store the JSON string in localStorage
        // localStorage.setItem('formData', formDataString);

        // Third way to store data into local storage
        var formData = {
                name: name,
                mail: email,
                phone: phone,
                date: date,
                time: time
            };
                // Store the data in localStorage
                for (var key in formData) {
                    localStorage.setItem(key, formData[key]);
            }
            form.reset();
}