/*obsługa zdarzenia i pobranie danych*/

document.getElementByID('bmi-form').addEventlistener('submit', e => {
    e.preventDefault();
    const nameInput = document.getElementById('bmi-name').value;
    const weightInput = document.getElementById('bmi-weight').value;
    const heightInput = document.getElementById('bmi-height').value;
    console.log(nameInput);
    console.log(weightInput);
    console.log(heightInput);
});

// function() {}
/* a => a*a; */

/* function(a) {
    return a * a;
} */