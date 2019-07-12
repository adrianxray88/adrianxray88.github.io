
$(function () {
    let form = $('#formularz');
    let pizza = $('#pizza');
    let price = $('#price');
    let firstname = $('#imie');

    let prices = [
        0,
        11,
        16,
        40,
        22,
        5
    ];
    
    pizza.change(function () {
        let curPrice = $(this).val();
        price.text(prices[curPrice]);
    });

    form.submit(function () {

        if (firstname.val() == "") {
            console.log("wyświetl błędy");
            return false;
        }
    });
    formPzzaOrder.submit(function() {
        
        console.log("działa");
        return false;
    });
    if ( $.trim(lastName.val))
        ErrorsArray.push = "Uzupełnij pole: Kod Pocztowy"
    if ( errorsArray.length !=0 ) {

        errorsArray.array.forEach(element) => {
            let LiError = "<li>" + element +"</li>"
        });
    if ( AudioProcessingEvent.is(':checked') == false) {
        errorsArray.push("Musisz wyrazić zgode na przetwarzanie danych osobowych");
    }
});