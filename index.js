// 1. Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the value of the first element from the value of the last element
let minusAge = ages[ages.length - 1] - ages[0];
console.log(minusAge); // Output: 90

// Add a new age to the array
ages.push(36);

// Repeat the subtraction step to ensure it is dynamic
minusAge = ages[ages.length - 1] - ages[0];
console.log(minusAge); // Output: 33

// Calculate the average age
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(averageAge); // Output: 29.55555555

// 2. Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters); // Output: 3.8333333333333335

// Concatenate all the names together, separated by spaces
let allNames = '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
}
// adding the + '' adds a space for the array, differing from adding a space in every single string
console.log(allNames.trim()); // Output: "Sam Tommy Tim Sally Buck Bob"

// Question: How do you access the last element of any array?
// Answer: Use the .lengths array and subtract 1 like above (ages[ages.length - 1]) or if you know the # of the last element array[that number]
// Question: How do you access the first element of any array?
// Answer: use the Array position at 0 (array[0]) is the first element.

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// Assuming you have an array of names

// Create a new array to hold the lengths of each name
let nameLengths = [];

// Iterate over the names array and add the length of each name to the nameLengths array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

// Output the nameLengths array
console.log(nameLengths); // Output: [5, 3, 4]


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum = 0

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log("The sum of all elements in the nameLengths array is:", sum);
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
    return word.repeat(n);
}

// Example usage:
console.log(repeatWord('Hello', 3)); // Output: HelloHelloHello


// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Example usage:
console.log(getFullName("John", "Doe")); // Output: John Doe


// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers) {
    // Calculate the sum of the array using the reduce method
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    // Check if the sum is greater than 100
    return sum > 100;
}

// Example usage:
const numbersArray = [10, 20, 30, 40, 5];
console.log(isSumGreaterThan100(numbersArray)); // Output: true


// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(numbers) {
    const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / numbers.length;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const average = calculateAverage(array);
console.log(average); // Output: 3


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isAverageGreater(arr1, arr2) {
    // Helper function to calculate the average of an array
    function calculateAverage(arr) {
        const sum = arr.reduce((acc, num) => acc + num, 0);
        return sum / arr.length;
    }

    // Calculate the averages of both arrays
    const avg1 = calculateAverage(arr1);
    const avg2 = calculateAverage(arr2);

    // Compare the averages
    return avg1 > avg2;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 4, 5, 6];
console.log(isAverageGreater(array1, array2)); // Output: false


// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Example usage:
const isHotOutside = true;
const moneyInPocket = 15.00;

console.log(willBuyDrink(isHotOutside, moneyInPocket)); // This will log: true


// Create a function of your own that solves a problem. In comments, write what the function does and why you created it. -->

const shouldGoToWork = (moneyInBank) => {
    return moneyInBank < 1000 ? "You need to go to work." : "You can take the day off!";
};

// Example usage:
let moneyInBank = 500;
console.log(shouldGoToWork(moneyInBank)); // Output: "You need to go to work."

moneyInBank = 1500;
console.log(shouldGoToWork(moneyInBank)); // Output: "You can take the day off!"

// This arrow function will tell me to go to work or not according to how much money I have in the bank. I could add an array for moneyInBank and add my paystubs if I wanted to