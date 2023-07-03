// Get the form element with the ID "sellingProduct"
let productForm = document.getElementById("sellingProduct");

// Get the ul element with the ID "productList"
let productList = document.getElementById("productList");

// Add an event listener to a form
productForm.addEventListener("submit", sellProductForm);

async function sellProductForm(e) {
  e.preventDefault(); // Prevent form submission to avoid page refresh

  let sellingPrice = document.getElementById("sellingPrice");
  let productName = document.getElementById("productName");

  // Creating an object for passing into the post request
  let productsObj = {
    price: sellingPrice.value,
    productName: productName.value,
  };

  // Create product into backend
  try{
    let createData = await axios.post("https://crudcrud.com/api/f4c4e85ae1904a85955b43f17599e7fa/products", productsObj);
    console.log(`Data has been created: ${JSON.stringify(createData.data)}`);
    let data = createData.data;
    showProducts(data);
    productForm.reset();
}
  catch(err){
    console.log(err);
  }
}

// Show products and their prices on the screen
function showProducts(res) {
  // create list
  let li = document.createElement("li");

  // Adding class to the list
  li.className = "py-2";

  //Setting an attribute to the list
  li.setAttribute("id", `${res._id}`);

  // Appending and creating the textNode for the list
  li.appendChild(document.createTextNode(`${res.price} - ${res.productName}`));

  // create delete button
  let deleteBtn = document.createElement("button");

  // Adding classes to the deleteBtn
  deleteBtn.className = "btn btn-secondary btn-sm float-right mx-2";

  // Appending and creating the textNode for the delete button
  deleteBtn.appendChild(document.createTextNode("Delete Product"));

  // append delete button to li
  li.appendChild(deleteBtn);

  // finally append li to ul(product list)
  productList.appendChild(li);

  // Get the heading element with the ID "productPrice"
  let productPrice = document.getElementById("productPrice");

  // Calculating the price and updating the productPrice.textContent
  calculatePrice(`${res.price}`);
  productPrice.textContent = `Total value worth of products: Rs. ${total}`;

  // add delete button functionality
  deleteBtn.addEventListener("click", (e) => {
    let li = e.target.parentElement;

    // Getting the id using attribute
    let id = li.getAttribute("id");

    // Getting the price after spliting the firstChild textContent
    let price = parseInt(li.firstChild.textContent.split(" - ")[0]);

    // Removing the list from the productList
    productList.removeChild(li);

    // After removing we are updating the price
    updateTotalPrice(price);

    // Invoking the function to delete the product for a particular id
    deleteProducts(id);
  });
}

// Show products on onload
window.addEventListener("DOMContentLoaded", async () => {
  try {
    let showData = await axios.get("https://crudcrud.com/api/f4c4e85ae1904a85955b43f17599e7fa/products");
    console.log(showData.data);
    showData.data.forEach((product) => {
      showProducts(product);
    });
  } 
  catch (err) {
    console.log(err);
  }
});

// delete products by id
async function deleteProducts(id) {
  try {
    await axios.delete(`https://crudcrud.com/api/f4c4e85ae1904a85955b43f17599e7fa/products/${id}`);
    console.log('Product has been deleted');
  } 
  catch (err) {
    console.log(err);
  }
}

let total = 0;
// calculate product price
function calculatePrice(price) {
  total += parseInt(price);
}

// Update total price on the screen
function updateTotalPrice(price = 0) {
  total -= parseInt(price);
  let productPrice = document.getElementById("productPrice");
  productPrice.textContent = `Total value worth of products: Rs. ${total}`;
}
