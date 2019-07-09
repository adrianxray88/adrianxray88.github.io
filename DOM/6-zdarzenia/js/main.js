const showText = () => {
    event.preventDefault();
    console.log(event);
    console.log('kliknieto');
}

const changeBackground = (event) => {
    console.log(event);
    document.body.style.backgroundColor = "grey";
}

// const changeBackground = (event) => {
//     if()
//     document.body.style.backgroundColor = "white";

document.body.addEventListener('keydown', changeBackground);
let firstLink = document.getElementsByClassName('link')[4];
// firstLink.onclick = showText(event);

firstLink.addEventListener('click', showText);

// firstLink.addEventListener('click', function(e) {
//     event.preventDefault();
//     console.log('kliknieto');
// }
let container = document.getElementById('sectionFirst');
container.addEventListener('click', (e) => {
    console.log(e.target);
})
