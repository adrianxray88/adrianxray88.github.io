let rodzic = document.getElementById('parFirst').parentNode;
console.log(rodzic);

// dzieci wezly
// let wezly = document.getElementById('parFirst').childNodes;
// console.log(wezly);

// dzieci wezly
let wezly = document.getElementById('parFirst').children;
console.log(wezly);

let pierwszeDziecko = rodzic.firstElementChild;
console.log(pierwszeDziecko);

let ostatnieDziecko = rodzic.lastElementChild;
console.log(ostatnieDziecko);

//wyszukiwanie rodzenstwa
let linkPrev = document.getElementById('sibling').previousElementSibling;
let linkNext = document.getElementById('sibling').nextElementSibling;

let linkPrevNode = document.getElementById('sibling').previousSibling;

console.log(linkPrev);
console.log(linkNext);