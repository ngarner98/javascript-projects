/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//a.
for(x = 0; x <= 20; x++) {
  console.log(x);
}

//b.
console.log('\n')
for(x = 3; x <= 29; x++) {
  if((x % 2) === 1) {
    console.log(x);
  }
}

//c.
console.log('\n')
for(x = 12; x >= -14; x--) {
  if((x % 2) === 0) {
    console.log(x);
  }
}

//d.
console.log('\n')
for(x = 50; x >= 20; x--) {
  if((x % 3) === 0) {
    console.log(x);
  }
}



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let lcString = "LaunchCode";
let lcArr = [1, 5, 'LC101', 'blue', 42];

for(x = 0; x <= lcArr.length - 1; x++) {
  console.log(lcArr[x]);
}

for(x = lcString.length; x >= 0; x--) {
  console.log(lcString.charAt(x));
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  console.log('\n')
  
  let array3 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let arrayEven = [];
  let arrayOdd = [];

  for(x = 0; x <= array3.length - 1; x++) {
    if ((array3[x] % 2) === 0) {
      arrayEven.push(array3[x]);
    } else {
      arrayOdd.push(array3[x]);
    }
  }

  console.log(arrayEven, arrayOdd);