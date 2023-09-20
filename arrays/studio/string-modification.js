const input = require('readline-sync');

let str = "LaunchCode";
let word = input.question('Please enter a word: ')

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let threeLetters = str.slice(0,3);
let remainingLetters = str.slice(3);
let newWord = remainingLetters + threeLetters;


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`\nPart 1: Our original word was ${str}, but now it has turned to ${newWord}!\n`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let letterQuestion = '';

letterQuestion = input.question("How many letters do you want to move?\n");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let letters = word.slice(0, (letterQuestion));
let questionRemaining = word.slice(letterQuestion);
let questionNewWord = questionRemaining + letters;

if (letterQuestion <= word.length) {
    console.log(`Our original word was ${word}, but now it has turned to ${questionNewWord}!\n`);
} else {
    console.log('Error, tried to move too many letters.');
}

