let tablica = [1, 5, 100, 200, 6];

// for(let i = 0; i < tablica.length; i++) {
//     console.log(tablica[i]);
// }

// forEach
tablica.forEach(function(element, index) {
    console.log('Element tablicy to: ' + element + ', index tablicy to ' + index);
})

let krystian = {
    name: 'Krystian',
    age: 35
}
//for in = do obiektów
for (let key in krystian) {
   console.log(krystian[key]);
}

//while - 
