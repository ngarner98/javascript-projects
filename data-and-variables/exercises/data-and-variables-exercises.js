// Declare and assign the variables below
let shuttle = "Determination"
let speedMph = 17500
let dMars = 225000000
let dMoon = 384400
const mpk = 0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttle)
console.log(typeof speedMph)
console.log(typeof dMars)
console.log(typeof dMoon)
console.log(typeof mpk)
// Calculate a space mission below
let milesToMars = dMars * mpk
let hoursToMars = milesToMars / speedMph
let daysToMars = hoursToMars / 24
// Print the results of the space mission calculations below
console.log(shuttle + " will take " + daysToMars + " days to reach Mars. ")
// Calculate a trip to the moon below
let milesToMoon = dMoon * mpk
let hoursToMoon = milesToMoon / speedMph
let daysToMoon = hoursToMoon / 24
// Print the results of the trip to the moon below
console.log(shuttle + " will take " + daysToMoon + " days to reach Mars. ")