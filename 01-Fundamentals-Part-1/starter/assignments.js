const country = "Portugal";
const continent = "Europe";
let population = 10;
const isIsland = false;
// const language = 'french';

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

// const markHeight = 1.88;
// const johnHeight = 1.76;
// const markWeight = 95;
// const johnWeight = 85;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// if (markHigherBMI) {
//   console.log(`Mark's BMI is higher than John's!. Mark's
//   BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`Johns's BMI is higher than Marks's!. John's
//   BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// console.log(markHigherBMI);

// 4
// '617'
// 23
// false
// 1143

// const numNeighbours = +prompt('How many neighbour countries does your country have?');

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// if (language === 'english' && population < 50 && isIsland === false) {
//   console.log('Portugal does not meet your criteria :(');
// } 

// function scoreAverage (roundOne, roundTwo, roundThree) {
//   return (roundOne + roundTwo + roundThree) / 3;
// }

// dolphinAverage = scoreAverage(97, 112, 101);
// koalaAverage = scoreAverage(109, 95, 123);

// if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
//   console.log('Doiplhins Wins!');
// } else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
//   console.log('Koalas Wins!');
// } else if (dolphinAverage === koalaAverage && koalaAverage >= 100 && dolphinAverage >= 100) {
//   console.log('Draw');
// } else {
//   console.log('No winner');
// }

const language = 'finnish';

switch (language) {
  case 'chinese':
  case 'mandarin': 
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;  
  case 'arabic':
    console.log('5th most spoken language');
    break;  
  default:
    console.log('Great language too :D');
}


