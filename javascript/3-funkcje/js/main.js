console.log('podpiete');
// funkcja to nazwany blok kodu, który wykonuje zadane instrukcje po wywołaniu
// definicja funkcji za pomocą słowa kluczowego "function"
function zalogujDoKonsoli() {
    console.log('podpiete');
}
// wywołanie funkcji - napisanie nazwy
zalogujDoKonsoli();

// funkcja parametrowa
function odejmowanie(par1, par2) {
    // console.log(par1-par2);
    return par1 - par2;
}

// function dodawanie(par1, par2) {
//     return par1 + par2;
// }

const dodawanie = (par1, par2) => {
    let wynik = par1 + par2;
    return wynik;
}

let odjac = odejmowanie(5, 3);

let dodano = dodawanie(odjac, 8);
// w console.log wyrzucam to, co zostało zwrocone
console.log(odjac);
console.log(dodano);

// function mnogo(par1, par2, par3) {
//     let wynik = par1 * par2 * par3;
//     return wynik;
// }
// let wynik2 = mnogo(2, 3, 4)
// console.log(wynik2)

// funkcje strzalkowe

const zaloguj = () => {
    console.log('wiesio');
}
zaloguj();
