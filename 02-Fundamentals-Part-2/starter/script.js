"use strict";

// function describeCountry (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const spain = describeCountry('Spain', 6, 'Barcelona');
// const finland = describeCountry('Finland', 4, 'Helsinki');
// const latvia = describeCountry('Latvia', 10, 'Riga');

// console.log(spain, finland, latvia);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

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

// if (populations.length >= 4) {
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

// const myCountry = {
//   country: 'France',
//   capital: 'Paris',
//   language: 'french',
//   population: 70,
//   neighbours: ['Germany', 'Switzerland', 'Check Republic'],
//   describe: function () {
//     return `${this.country} has ${this.population} miilion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//   },
//   checkIsland: function () {
//     this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;
//   }
// }

// console.log(`${myCountry.country} has ${myCountry.population} miilion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// myCountry['population'] -= 2;

// console.log(myCountry);

// jonas.firstName;
// jonas.friends.length;
// jonas.friends[0];

// myCountry.checkIsland();
// console.log(myCountry)

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// }

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(`Mark's BMI (${mark.BMI})) is higher than John's (${john.BMI})!"`);
// } else if (mark.BMI < john.BMI) {
//   console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`);
// } else {
//   console.log('Draw');
// }

// for (let i = 1; i <= 50; i++) {
//   console.log (`Voter number ${i} is currently voting`);
// }

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++ ) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
//   }
// }

// const percentages3 = [];
// let i = 0;

// while (i < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[i]));
//   i++
// }

// console.log(percentages3);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   const tipValue = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tipValue;
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log(tips);
// console.log(totals);

// function calcAverage(arr) {
//   let acc = 0;

//   for (let i = 0; i < arr.length; i++) {
//     acc += arr[i];
//   }

//   return acc / arr.length;
// }

// console.log(calcAverage(totals));

// const x = 23;

const forecast1 = [17, 21, 23];
const forecast2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const result = arr.map(
    (item) => `${item}ºC in ${arr.indexOf(item) + 1} days`
  );
  return result.join("...");
};

console.log(printForecast(forecast2));
