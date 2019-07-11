let tablica = [1, 20, 10, 59, 214, 123];

// for(let i = 0; i <)

let nazwaObiektu = {
    nazwa: 'obiekt',
    'typ obiektu': 'obiekt'
}

for(let asd in nazwaObiektu) {
    console.log(nazwaObiektu[asd]);
}

let number = 0;
while(number < 2) {
    console.log(++number);
}

let iterator = 0;
do {
    console.log(iterator);
    iterator++;
} while(iterator < 0);

const iloczynKwadratow = (liczba1, liczba2) => {
    let kwadrat1 = Math.pow(liczba1, 2);
    let kwadrat2 = liczba2 * liczba2;
    return kwadrat1 * kwadrat2;

}
let pierwszaLiczba = 5;
let drugaLiczba = 4;
let wynikDzialaniaFunkcji = iloczynKwadratow(pierwszaLiczba, drugaLiczba);

console.log(wynikDzialaniaFunkcji)