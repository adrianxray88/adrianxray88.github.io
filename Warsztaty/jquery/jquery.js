
$(function() {
    let form = $('#formularz');
    let pizza = $('#pizza');
    let price = $('#price');

    let prices = [
        0,
        11,
        16,
        40,
        22,
        5
    ];
    let pizzas = [
        name
    ]
    pizza.change(function() {
        let curPrice = $("select#pizza option:selected" ).attr
        ("price");
        price.text(curPrice);
        console.log('currentPizza')
    });
    formularz.submit(function() {

        if (firstname.val() == "") {
        console.log("wyświetl błędy");
        return false; 
        }
    });

     
});