// 1.
// create a loop that counts from 0 - 100,
// and for every iteration is does the Fizz - bazz with the number
//     Print out "Fizz" if the number is divisible without reminder by 2
//     Print out "Bazz" if the number is divisible without reminder by 3
//     Print out "Fizz Bazz" if the number is divisible without reminder by 2 and 3
//     Print out the number if none of above apply

// 2.
// Create a loop, that counts from 1000 -> 50, counts every 7th number
// and prints out if the number is even or odd
// 1000 is even
// 993 is odd
// 986 is even
// ...

let num = 0;
while (num <= 100) {
    if (num % 2 == 0 & num % 3 == 0) {
        console.log('Fizz Bazz');
    } else if (num % 2 == 0) {
        console.log('Fizz');
    } else if (num % 3 == 0) {
        console.log('Bazz');
    } else {
        console.log(num);
    }
    num++;
}


console.log('-----------');

let num2 = 1000;
while (num2 >= 50) {
    if (num2 % 2 === 0) {
        console.log(num2, ' is even number')
    } else {
        console.log(num2, ' is odd number');
    }
    num2 -= 7;
}