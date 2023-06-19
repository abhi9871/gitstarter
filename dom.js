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

var second = document.querySelectorAll('.list-group-item')[0];
second.style.color = 'green';

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}






