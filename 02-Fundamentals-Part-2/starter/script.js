'use strict'

// function describeCountry (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const spain = describeCountry('Spain', 6, 'Barcelona');
// const finland = describeCountry('Finland', 4, 'Helsinki');
// const latvia = describeCountry('Latvia', 10, 'Riga');

// console.log(spain, finland, latvia);

function percentageOfWorld1 (population) {
  return population / 7900 * 100;
}

// console.log(percentageOfWorld1(100));

// const percentageOfWorld2 = function (population) {
//   return population / 7900 * 100;
// }

// const res1 = percentageOfWorld2(7900);
// console.log(res1);

// const percentageOfWorld3 = population => population / 7900 * 100;

// const res2 = percentageOfWorld3(400);
// console.log(res2);

// function describePopulation (country, population) {
//   const percentage = percentageOfWorld1(population);
//   return `${country} has ${population} million people, 
//   which is about ${percentage}% of the world`;
// }

// console.log(describePopulation('China', 1441));

// function calcAverage (scoreOne, scoreTwo, scoreThree) {
//   return (scoreOne + scoreTwo + scoreThree) / 3;
// }

// const dolphinsAverage = calcAverage(85, 54, 41);
// const koalasAverage = calcAverage(23, 34, 27);
// console.log(dolphinsAverage);
// console.log(koalasAverage);

// function checkWinner (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgDolphins * 2 <= avgKoalas) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`None of them win`);
//   }
// }

// checkWinner(dolphinsAverage, koalasAverage);

// const populations = [10, 45, 23, 56];

// if (populations.length >=4) {
//   console.log(populations);
// }

// const percentages = populations.map((item) => percentageOfWorld1(item));

// console.log(percentages);

// const neighbours = ['spain', 'germany', 'switzerland', 'belgium'];
// neighbours.push('Utopia');
// neighbours.pop();

// if (!neighbours.includes('germany')) {
//   console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('spain')] = 'finland';

// console.log(neighbours);

// function calcTip (bill) {
//   if (50 <= bill <= 300) {
//     return bill * 0.15 
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];

// const tips = [];
// bills.forEach((item) => tips.push(calcTip(item)));

// function total (bills, tips) {
//   let result = [];
//   for (let i = 0; i < bills.length; i++ ) {
//     result.push(bills[i] + tips[i]);
//   }
//   return result
// }

// console.log(total(bills, tips));

const myCountry = {
  country: 'France',
  capital: 'Paris',
  language: 'french',
  population: 70,
  neighbours: ['Germany', 'Switzerland', 'Check Republic']
}

console.log(`${myCountry.country} has ${myCountry.population} miilion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry['population'] -= 2;

console.log(myCountry);

// jonas.firstName;
// jonas.friends.length;
// jonas.friends[0];