
let wzrostMarcin = 170;
let wzrostMichał = 180;
//(warunek) ? wartosc_jezeli_prawda : wartosc_jezeli_nieprawda
let wynik = (wzrostMarcin > wzrostMichał) ? "Marcin jest wyższy" : "Michał jest wyższy";
console.log(wynik);

if(wzrostMarcin > wzrostMichał) {
    console.log('123');   
} else if (wzrostMarcin == wzrostMichał){
    console.log('Michał jest wyższy');

} else {
    console.log('Żaden z warunków nie został spełniony');
}

let kolor = 'czerwony';

switch(kolor) {
    case 'czerwony':
        console.log('wybrałeś kolor czerwony');
        break ; 
    
    case 'zielony' :
        console.log('wybrałeś kolor zielony');
        break ;
    default:
        console.log('nie wybrałeś koloru z listy');
}