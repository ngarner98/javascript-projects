// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let MaximumFuelTemp = -150
let fuelLevel = "100%";
let weatherStatus = "clear"
let preparedForLiftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count is within limits");
} else {
    console.log("Crew exceeds maximum limit.");
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronaut status ready.");
} else {
    console.log("Astronauts are not ready for launch.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass is at " + totalMassKg + " and is within limits.");
} else if (totalMassKg === maximumMassLimit) {
    console.log("Total mass is at " + totalMassKg + " and is at the maxiumum limit.");
} else {
    console.log("Total mass is at " + totalMassKg + " and is above the limitations.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log("Fuel temp is within limits.");
} else {
    console.log("Fuel temp is not within limitations.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Full levels full.");
} else {
    console.log("Fuel is not full.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather is clear");
} else {
    console.log("Weather is not clear.");
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCount <= 7 && astronautStatus === "ready" &&
    totalMassKg <= maximumMassLimit && (fuelTempCelsius >= -300 ||
    fuelTempCelsius <= -150) && fuelLevel === "100%" &&
    weatherStatus === "clear") {
        preparedForLiftOff = true;
    } else {
        preparedForLiftOff = false;
    }

if (preparedForLiftOff === true) {
        console.log("\nAll systems are clear! Initiate shuttle launch.\n");
        console.log("\nDate: " + date);
        console.log("Time: " + time);
        console.log("Astronaut count: " + astronautCount);
        console.log("Crew Mass : " + crewMassKg);
        console.log("Fuel mass: " + fuelMassKg);
        console.log("Shuttle mass: " + shuttleMassKg);
        console.log("Total mass: " + totalMassKg);
        console.log("Fuel temp: " + fuelTempCelsius);
        console.log("Weather status: " + weatherStatus);
        console.log("\nHave a safe trip astronauts!");
    } else {
        console.log("\nNot ready for launch! Adjust perameters to be within limits!");
    }
