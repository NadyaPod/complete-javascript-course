const country = "Portugal";
const continent = "Europe";
let population = 10;
const isIsland = false;
const language = 'french';

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// const halfNumber = population / 2;
// console.log(population++);

// const finnlandPopulation = 6;
// console.log(population > finnlandPopulation);
// console.log(population < 33);

// const description = country + ' is in '  + continent + ', and its ' + population + ' million people speak ' + language;
// console.log(description);

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

const markHeight = 1.88;
const johnHeight = 1.76;
const markWeight = 95;
const johnWeight = 85;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's!. Mark's
  BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`Johns's BMI is higher than Marks's!. John's
  BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

console.log(markHigherBMI);