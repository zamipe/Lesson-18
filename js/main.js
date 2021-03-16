const num1 = 3;

switch (num1) {
    case 1:
        console.log('Value is 1');
        break; //switch steitmentos ir 'breaks'. Ja to neliek, ja num1 =1, nepabeigs nolasīties pie case 1, bet turpinās lasīt arī nākamo apgalvojumu un to izpildīs (līdz kamēr atdursies pret breiku).
    case 2:
        console.log('Value is 2');
        break;
    case 3:
    case 4:
        console.log('Value is 3 or 4');
        break;

    default:
        console.log('Value is not between 1 and 3')
        break;
}

const url = '/users';
switch (url) {
    case '/users':
        console.log('Load the users page')
        break;
    case '/about-us':
        console.log('Load the about-us')
        break;
    case '/contacts':
        console.log('Load the contacts')
        break;
    case '/home':
        console.log('Load the home')
        break;

    default:
        console.log('Load the 404')
        break;
}



//infinite loops

// while (true) { !!!!!!!!don't do this!
// console.log('yay, looping')
// }


let num2 = 2;
while (num2 < 10) {
    // console.log('yay, looping', num2);
    num2++;
}

let num3 = 0;
while (num3 < 10) {
    if (num3 % 2 === 0) {
        console.log(num3, 'is even number')
    } else {
        console.log(num3, 'is odd number');
    }
    num3++;
}




let num4 = 0; //
do {
    console.group('yay, looping');
    num4++;
} while (num4 > 10);

for (let i = 0; i < 10; i++) {
    console.log('the numer is', i)
}


for (let i = 12; i > 0; i--) {
    console.log(i);
}

const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
// cars[0] += ' is a nice car' .. un tā par visām 6 gb.
for (var i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
    // debugger;
    cars[i] += ' is a nice car!';
}

console.log(cars);