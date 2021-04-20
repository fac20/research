// Open template.html in your browser. You'll notice that the <template> 
// element does not appear.


// This function takes a template, then extracts its Document Fragment
// using its .content property so that it can then be displayed on the page
function addTemplate() {
    let template = document.getElementById('my-paragraph');
    let templateContent = template.content;
    document.body.appendChild(templateContent);
};

// Uncomment the function below to see what it does
addTemplate();


// You'll also notice that template.html contains an empty <ul> element
// we're going to use documentFragment to add several <li> elements to it
// all at once

//This function creates a new DocumentFragment, then one by one adds the fruits
//from the array to it
// Once the DocumentFragment has all the items we want to add, 
// we can add them all at the same time using .appendChild to place it inside
// the ul element (with an id of 'list')
function insertListItems () {
    var list = document.querySelector('#list')
    var fruits = ['Apple', 'Orange', 'Banana', 'Melon']

    var fragment = new DocumentFragment()
 
    fruits.forEach(function (fruit) {
    var li = document.createElement('li')
    li.innerHTML = fruit
    fragment.appendChild(li)
    })

    list.appendChild(fragment)
};

// Uncomment the function below to see what it does
insertListItems();