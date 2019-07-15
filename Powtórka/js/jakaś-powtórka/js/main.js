/* Liczenie wskaznika BMI */
const countBmi = (weight, height) => {
    return weight/Math.pow(height, 2);
}

/*obsługa zdarzenia i pobranie danych*/

document.getElementById('bmi-form').addEventListener('submit', e => {
    e.preventDefault();
    const nameInput = document.getElementById('bmi-name').value;
    const weightInput = parseFloat(document.getElementById('bmi-weight').value);
    const heightInput = parseFloat(document.getElementById('bmi-height').value)/100;
    
    
    const result = countBmi(weightInput, heightInput);
    console.log(nameInput);
    console.log(weightInput);
    console.log(heightInput);
    console.log(result);
    document.getElementById('bmi-result').innerHTML = 'Cześć ${nameInput}, Twój wskaźnik BMI to ${result}'

});


// function() {}
/* a => a*a; */

/* function(a) {
    return a * a;
} */