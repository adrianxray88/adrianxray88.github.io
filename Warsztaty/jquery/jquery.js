
$(function () {
    let form = $('#formularz');
    let pizza = $('#pizza');
    let price = $('#price');
    let firstname = $('#Imię');

    let prices = [
        0,
        11,
        16,
        40,
        22,
        5
    ];
    // let pizzas = [
    //     name
    // ]
    pizza.change(function () {
        let curPrice = $(this).val();
        price.text(prices[curPrice]);
        // console.log('currentPizza')
    });

    form.submit(function () {

        if (firstname.val() == "") {
            console.log("wyświetl błędy");
            return false;
        }
    });

});