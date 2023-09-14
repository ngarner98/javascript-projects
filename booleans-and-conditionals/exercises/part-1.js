// Declare and initialize the variables for exercise 1 here:
// Part 1 variables:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerScienceCode = 200;
let shuttleSpeed = 15000;
// Part 5 variables:
let fuelLevel = 2000
let engineTemperature = 2500
// Part 6 variables:
let commandOverride = false

// BEFORE running the code, predict what will be printed to the console by the following statements:

// Part 2 below:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

// Part 3 below:

if (crewStatus === true) {
   console.log("Crew Ready");
} else {
   console.log ("Crew Not Ready");
}

if (computerScienceCode === 200) {
   console.log("Please stand by. Computer is rebooting");
} else if (computerScienceCode === 400) {
   console.log ("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if(shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}

// Prediction for part 4 is "yes they will yeild the same result"

// Part 5 below:

if (fuelLevel < 1000 || engineTemperature > 3500 ||
engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engine good.");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.");
} else {
   console.log("Fuel and engine status pending...");
}

// Part 6 below:

if (fuelLevel > 20000 && engineIndicatorLight !==
"red blinking" || commandOverride === true) {
   console.log("Cleared to launch!");
} else {
   console.log("Launch scrubbed!");
}