let students = ["Ania", "Władymir", "Wasyl", "Adrian", "Danka", "Igor"];

students.forEach( (element, index) => {
    console.log("Pojawia się" + element + " " +index)
})

let osoby = {
        "pracownicy": [
            {"firstName": "Krystian", "lastName": "Dziopa"}
        ]
    }

//funkcje sa do tego, ze jeden kliknie, drugi nie. jak kliknie, to ma sie dziac.
osoby.pracownicy.forEach( (pracownik, indexPracownika) => {
    console.log("Index: " + indexPracownika
                + "Imię: " + pracownik.firstName
                + "Nazwisko " + pracownik.lastName);

});

const mojaFunkcja = (asd, indexPracownika) => {
    console.log("Index: " + indexPracownika
                    )
}