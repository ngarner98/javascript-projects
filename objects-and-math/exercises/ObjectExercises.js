let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 9,
   astronautID: 3,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let dogOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.floor(Math.random()*11);
   }
}

let microAnimalOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.floor(Math.random()*11);
   }
}

let crew = [superChimpOne, salamander, superChimpTwo, dogOne, microAnimalOne]

function crewReports(array) {
   for (i=0; i < array.length; i++)
   console.log(`${array[i].name} is a ${array[i].species}. They are ${array[i].age} years old
and ${array[i].mass} kilograms. Their ID is ${array[i].astronautID}.`);
}

function fitnessTest (array) {
   raceResults = [];
   for (i = 0; i < array.length; i++) {
      steps = 0;
      turns = 0;
      while (steps < 20) {
         steps += array[i].move();
         turns ++
      }
      raceResults.push(`${array[i].name} took ${turns} to take 20 steps.`);
   } return raceResults;
}

console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!