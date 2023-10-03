// Code your orbitCircumference function here:
function orbitCircumference(spacecraftAltitude) {
  const radiusOfTheEarth = 6371; //km
  let orbitRadius = radiusOfTheEarth + spacecraftAltitude;
  return Math.round(2 * Math.PI * orbitRadius);
}

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
  let circumference = orbitCircumference(orbitRadius);
  let orbitDistance = orbitsCompleted * circumference;
  let time = Math.round(100 * orbitDistance/orbitalSpeed) / 100;
  console.log(`The mission will travel ${orbitDistance} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array) {
  entries = [];
  while(entries.length < 3) {
  let index = Math.floor(Math.random()*array.length);
  if (!entries.includes(array[index])) {
      entries.push(array[index]);
    }
  } return entries;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius = 2000, orbitalSpeed = 28000) {
  let spacewalkDuration = missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygenUsed = Math.round(1000 * candidate.o2Used(spacewalkDuration)) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkDuration}
  hours and require ${oxygenUsed} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];