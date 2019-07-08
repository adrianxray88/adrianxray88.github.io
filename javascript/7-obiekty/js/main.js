//oddzielanie par, przecinkiem. Obiekty.'
//e5
let person ={
    name: 'Marcin',
    height: 178,
    print() {
        console.log(this.name);
    }

}
console.log(person.name);
person.print();

//metody obiektu
//dostep do pola obiektu, jesli nazwa jest jednoczlonowa - nazwa._pola. Jezeli nazwa dwuczlonowa (spacje) 
//nazwa_obiektu['nazwa pola']
console.log(person['first name']);
// person.print()
person.weight = 65;
console.log(person.weight);
//klasy
class Person{
    constructor(name, surname, height){
        this.name = name;
        this.surname = surname;
        this.height = height;
        }
    printInfo() {
        console.log( 'Imię: ${this.name}, Nazwisko ${this.surname}' );
    }
}
//Mamy zdefiniowaną klasę, ob. klucz. tw. przez new
let marcin = new Person('Marcin', 'G', 180);
marcin.printInfo();
console.log(marcin.height);

let michal = new Person('Michal', 'K', 170);
michal.printInfo();
console.log(michal.height);