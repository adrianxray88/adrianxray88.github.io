let jsonOsoby = {
    osoby: [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podróże'},
                {nazwa: 'gotowanie'}
            ]
        },
        {
            imie: 'Dominik',
            nazwisko: 'Gomula',
            wzrost: 17,
            zainteresowania: [
                {nazwa: 'podróże'},
                {nazwa: 'gotowanie'}
        ]
        },
        {
            imie: 'Klaudia',
            nazwisko: 'Doe',
            wzrost: 165,
            zainteresowania: [
                {nazwa: 'podróże'},
                {nazwa: 'gotowanie'},
                {nazwa: 'języki'}
        ]
        }
    ]
}

console.log(jsonOsoby.osoby[0].imie);

console.log(jsonOsoby.osoby[1].zainteresowania[0].nazwa);

// for(let i = 0; i < jsonOsoby.osoby.length; i++) {
//     console.log(jsonOsoby.osoby[i].imie);
// }
for(let i = 0; i < jsonOsoby.osoby.length; i++) {
    for(let j = 0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
    console.log(jsonOsoby.osoby[i].zainteresowania[j]);
    }
}