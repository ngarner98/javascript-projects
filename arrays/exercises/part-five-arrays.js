let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());       // This split did nothing.
console.log(str.split('e'));    // This split removed every 'e' seperated them where the e was. 
console.log(str.split(' '));    // This split removed every space and separated each word at that space.
console.log(str.split(''));     // This split made every character individual.

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());        // This join did nothing.
console.log(arr.join('a'));     // This join, joined every variable with an 'a' in between
console.log(arr.join(' '));     // This join, joined every variable with a space in between
console.log(arr.join(''));      // This join, joined every variable together as one
//3) Do split or join change the original string/array?
arr.join('a');
console.log(arr);
str.split(' ');
console.log(str);
    // No the join and split functions did not change the original string/array. 

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(' '));