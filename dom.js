// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello"; 
// headerTitle.innerText = "Goodbye"; 
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";

// GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = "green";

// for(let item of items){
//     item.style.fontWeight = "bold";
// }

// var title = document.getElementsByClassName('title');
// title[0].style.fontWeight = "bold";
// title[0].style.color = "green";

// GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// li[4].style.listStyle = 'none';
// li[4].style.padding = '12px 20px';
// li[4].style.border = '1px solid rgba(0,0,0,.125)'

// QUERYSELECTOR //

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// QUERYSELECTORALL //

// var second = document.querySelectorAll('.list-group-item')[0];
// second.style.color = 'green';

// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// TRAVERSE THE DOM //

var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "grey";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "grey";
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// FirstChild
// console.log(itemList.firstChild);

// FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// LastChild
// console.log(itemList.lastChild);

// LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(itemList.nextSibling);

// nextSiblingElement
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = "hello1";

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create a text node
var newDivText = document.createTextNode('Hello');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

var div1 = document.createElement('div');
var div1Text = document.createTextNode('Hello');
div1.appendChild(div1Text);
// console.log(div1);
var li = document.querySelector('.list-group-item');

itemList.insertBefore(div1, li); 













