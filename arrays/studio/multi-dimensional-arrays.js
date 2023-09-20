const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

cabinent1 = food.split(',').sort();
cabinent2 = equipment.split(',').sort();
cabinent3 = pets.split(',').sort();
cabinent4 = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];

cargoHold.push(cabinent1, cabinent2, cabinent3, cabinent4);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let cabinentQuery = '';
let cabinentItem = '';

cabinentQuery = input.question('Please select a cabinent (0-3) to view: \n');
cabinentItem = input.question('What item are you looking for?\n').toLowerCase();

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cabinentQuery >= 0 && cabinentQuery <= 3) {
    console.log(`The contents for this cabient are: ${cargoHold[cabinentQuery]}.`);
} else {
    console.log('ERROR: Invalid Cabinent Number');
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if ((cabinentQuery >= 0 && cabinentQuery <= 3) && cargoHold[cabinentQuery].includes(cabinentItem)) {
    console.log(`Cabinet ${cabinentQuery} DOES include ${cabinentItem}.`);
} else {
    console.log(`Cabinet ${cabinentQuery} DOES NOT include ${cabinentItem}.`);
}