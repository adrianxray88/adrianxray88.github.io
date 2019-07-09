// tworzenie węzłów
// let button = document.createElement('button');
// //console.log(button);

// let text = document.createTextNode('click me');
// console.log(text);

// let atribute = document.createAttribute('class');
// console.log(atribute);

// let rodzic = document.getElementById('parFirst');
// rodzic.appendChild(button);
// button.appendChild(text);
// attribute.value = 'btn';
// button.setAttributeNode(attribute);

let paragraph = document.createElement('p');
let textInside = document.createTextNode('12345');
paragraph.appendChild(textInside);
// console.log(paragraph);
paragraph.setAttribute('class', 'paragraph');
// attribute.value = 'btn'
// btn.setAttribute
// console.log();

//usuwanie elementów
let rodzic2 = document.getElementsByTagName('body')[0];
rodzic2.appendChild(paragraph);
paragraph.removeAttribute('class');
document.body.removeChild(paragraph);
