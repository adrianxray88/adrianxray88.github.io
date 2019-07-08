let tablica = [1, 5, 100, 200, 6];
let i = 0;
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
while(i < tablica.length) {
    console.log(tablica[i]);
    if(i == 0) {
        break;
    }
}

//do ... while
let iteracja = 20;
do {
    ;iteracja;
    console.log(iteracja);
} while (iteracja < 10);

//break

//continue
for (let i = 1; i <= 20; i++) {
    if(i % 2 != 0) {
        continue;
    }
    console.log(i);
}