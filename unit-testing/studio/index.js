
let launchOutput = function(number) {
    let output = '';
    if(number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {
        output = 'LaunchCode Rocks!';
    } else if (number % 2 === 0 && number % 5 === 0) {
        output = 'Launch Rocks! (CRASH!!!!)'
    } else if (number % 3 === 0 && number % 5 === 0) {
        output = 'Code Rocks!'
    } else if (number % 2 === 0 && number % 3 === 0) {
        output = 'LaunchCode!'
    } else if (number % 5 === 0) {
        output = 'Rocks!'
    } else if (number % 3 === 0) {
        output = 'Code!'
    } else if (number % 2 === 0) {
        output = 'Launch!'
    } else {
        output = "Rutabagas! That doesn't work."
    } return output;
}

let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput:launchOutput
}

module.exports = launchcode;

