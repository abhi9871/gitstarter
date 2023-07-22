let form = document.getElementById("bookingForm");
let userList = document.getElementById("userList");
let isEditing = false; // Flag to indicate if we are editing an appointment
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault(); // Prevent form submission to avoid page refresh
  var name = document.getElementById("name");
  var email = document.getElementById("mail");
  var phone = document.getElementById("phone");

  // Create a data object
  var formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };

  if (isEditing) {
    // Updating an appointment
    let id = form.getAttribute("appointmentId");
    let li = document.getElementById(id);
    li.firstChild.textContent = `${formData.name} - ${formData.email} - ${formData.phone}`;
    editAppointments(id, formData);
  } else {
    // Create a post request using axios
    axios
      .post("http://localhost:3000/user/create-user", formData)
      .then((response) => {
        console.log(response.data);
        showDetailsOnScreen(response.data);
      })
      .catch((err) => console.log(err));
  }
  form.reset();
}

// show appointment details on user screen
function showDetailsOnScreen(data) {
  // To show the user details at the bottom of the form
    var li = document.createElement("li");
    li.className = "py-2";
    li.setAttribute("id", `${data.id}`);
    li.appendChild(
        document.createTextNode(`${data.name} - ${data.email} - ${data.phone}`)
  );

  // Add a delete button to a list
  var delBtn = document.createElement("button");
  delBtn.className = "btn btn-secondary btn-sm float-right mx-2";
  delBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(delBtn);

  // Add an edit button to a list
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-secondary btn-sm float-right mx-2";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);

  // Append list to a ul
  userList.appendChild(li);

  // add event listener to delBtn
  delBtn.addEventListener("click", (e) => {
    let li = e.target.parentElement;
    let id = li.getAttribute("id");
    userList.removeChild(li);
    deleteAppointments(id);
  });

  // add event listener to editBtn
  editBtn.addEventListener("click", (e) => {
    isEditing = true;
    let name = document.getElementById("name");
    let email = document.getElementById("mail");
    let phone = document.getElementById("phone");
    let li = e.target.parentElement;
    let id = li.getAttribute("id");
    axios
      .get(`http://localhost:3000/user/get-user/${id}`)
      .then((response) => {
        const data = response.data;
        name.value = data.name;
        email.value = data.email;
        phone.value = data.phone;
        form.setAttribute("appointmentId", id);
      })
      .catch((err) => console.log(err));
  });
}

// Show appointment data on onload
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/user/get-users")
    .then((response) => {
      response.data.forEach((appointment) => {
        showDetailsOnScreen(appointment);
      });
    })
    .catch((err) => console.log(err));
});

// Delete an appointment
function deleteAppointments(id) {
  axios
    .delete(`http://localhost:3000/user/delete-user/${id}`)
    .then((deletedProduct) => console.log(deletedProduct))
    .catch((err) => console.log(err));
}

// Edit an appointment
function editAppointments(id, obj) {
  isEditing = false;
  axios
    .put(`http://localhost:3000/user/edit-user/${id}`, obj)
    .then((updatedUser) => {
      console.log(updatedUser);
    })
    .catch((err) => console.log(err));
}
