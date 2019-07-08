//typ liczbowy number
let liczba = 4;

// zwroci number
console.log(typeof liczba);
//console.log(314e-2;)


//typ lancuchowy - string
let napis = "Ala ma /n kota";
console.log(napis);
console.log(typeof napis);

//interpolacja stringow
let wiek = 12
let zdanie = `Ola ma ${wiek} lat`;
console.log(zdanie);

//konkatenacja (laczenie) stringow
let zdanie2 = `Ola ma ` + wiek + ` lat`;
console.log(zdanie2);

//boolean. niezbedny do petli. wykonuje sie poki true
let prawda = true;
console.log(typeof prawda);

//undefined
console.log(typeof x);

//null 

//tablice
let names = ['Ania', 'Rafał', 'Adam'];

//wyciąganie z tablicy - nazwaTablicy[index]
console.log(names[1]);
console.log(names);

names[3] = 'Marcin';
names[4] = 'Anna';
console.log(names);

// names[6] = '';

//dodawanie na koniec tablicy przy pom. met. push
names.push('Dorota', 'Vasia');
console.log(names);

//metoda .pop() usuwa element z konca tablicy i go zwraca
console.log(names.pop());
console.log(names);

//unshift() dodaje elementy na poczatek tablicy
names.unshift('Paweł');
console.log(names);
//usuwanie i zwrot z tablicy
names.shift();
console.log(names);
// dlugosc tablicy met. length tyle razy petla ile elem.
console.log('Dlugosc tablicy to ' + names.length);

//metoda join - laczenie elementow
console.log(names.join(' '));

//reverse - czyta tablice od konca do poczatku. to juz zostaje.
console.log(names.reverse());
console.log(names.reverse());

// metoda sort sortuje tablice. to juz zostaje.
console.log(names.sort());

function sortNumber(a, b) {
    return a-b;
}

let liczby = [0, 10, 2, -1, 01];
console.log(liczby.sort(sortNumber));
