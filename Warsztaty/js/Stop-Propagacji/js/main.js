let btn = document.getElementsByClassName('btn')[0];
let mainNav = document.getElementsByClassName('main-nav')[0];

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    mainNav.classList.toggle('toggled');
});

document.body.addEventListener('click', () => {
    mainNav.classList.remove('toggled');
})

mainNav.addEventListener('click', (e) => {
    e.stopPropagation();
});

let nodeLista = document.querySelectorAll('.list-item a');

for(let i = 0; i < nodeLista.length; i++){
    console.log(nodeLista[i]);
    nodeLista[i].addEventListener('click', (e) => {
        e.preventDefault();
    });
}

// document.querySelectorAll('.list-item a').addEventListener('click', (e) => {
//     e.preventDeafault();
// })