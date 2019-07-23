let adrian = {
    name: 'Adrian',
    height: 1.83,
    weight: 100,
    hobbies: ['Roleplay', 'Military', 'Tactics'],
    
    sayYourName() {
        console.log('My name is' + this.name);
    },
    countBmi() {
        return adrian.weight / (adrian.height**2);
    }
}

function countBmi() {
    return adrian.weight / (adrian.height**2);
}

console.log(countBmi());


adrian.sayYourName();

console.log('Nasz obiekt ma na imię' + adrian.name);
adrian.hobbies.forEach(elem=>{
    console.log(elem)
})

class wihajster {
    construkctor() {
        this.shape = round;
        this.size = big;
    }
}

sruuufunction () {
    console.log(wihajster + ' jest ' + this.shape + ', ' + this.size + ' i robi sruuu!')
}