let productForm = document.getElementById('sellingProduct');
let productList = document.getElementById('productList');

// Add an event listener to a form
productForm.addEventListener('submit', sellProductForm);

function sellProductForm(e){
    e.preventDefault(); // Prevent form submission to avoid page refresh
    let sellingPrice = document.getElementById('sellingPrice');
    let productName =  document.getElementById('productName');

    let obj = {
        price : sellingPrice.value,
        productName : productName.value
    }
        
    // Create data into backend
    axios.post('https://crudcrud.com/api/4f5784f523f141bcbcb7493f9396a4e5/products', obj)
    .then((response) => {
        console.log('Data has been created');
        let data = response.data;
        showProducts(data);
    })
    .catch((err) => console.log(err));
    productForm.reset();
}

// Show products and their prices on the screen
function showProducts(res){
    // create list
    let li = document.createElement('li');
    li.className = 'py-2';
    li.setAttribute('id', `${res._id}`)
    li.appendChild(document.createTextNode(`${res.price} - ${res.productName}`));

    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-secondary btn-sm float-right mx-2';

    deleteBtn.appendChild(document.createTextNode('Delete Product'));

    // append delete button to li
    li.appendChild(deleteBtn);

    // finally append li to ul(product list)
    productList.appendChild(li);

    let productPrice = document.getElementById('productPrice');
    calculatePrice(`${res.price}`);
    productPrice.textContent = `Total value worth of Products: Rs. ${total}`;

    // add delete button functionality
    deleteBtn.addEventListener('click', (e) => {
        let li = e.target.parentElement;
        let id = li.getAttribute('id');
        let price = parseInt(li.firstChild.textContent.split(' - ')[0]);
        productList.removeChild(li);
        updateTotalPrice(price);
        deleteProducts(id);
    })
}

// Show products on onload
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/4f5784f523f141bcbcb7493f9396a4e5/products')
    .then(response => {
        console.log(response.data);
        response.data.forEach(product => {
            showProducts(product);
        });
    })
    .catch(err => console.log(err));
})

// delete products by id
function deleteProducts(id) {
    axios.delete(`https://crudcrud.com/api/4f5784f523f141bcbcb7493f9396a4e5/products/${id}`)
    .then((response) => {
        console.log('Products has been deleted');
    })
    .catch((err) => console.log(err))
}

let total = 0;
// calculate product price
function calculatePrice(price){ 
    total += parseInt(price);
}

// Update total price on the screen
function updateTotalPrice(price = 0) {
    total -= parseInt(price);
    let productPrice = document.getElementById('productPrice');
    productPrice.textContent = `Total value worth of Products: Rs. ${total}`;
  }