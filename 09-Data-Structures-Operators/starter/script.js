'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] =  game.players;
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Countiho', 'Perisic'];
// const {team1, x: draw, team2} = game.odds;

// // function printGoals (...playersNames) {
// //   playersNames.forEach(man => console.log(man));
// // }

// // printGoals(...game.scored);

// // team1 < team2 && console.log('Team 1 is more likely to win');

// console.log(game.scored);

// for (const [i, gamer] of game.scored.entries()) {
//   console.log(`Goal: ${i + 1}: ${gamer}`);
// }
// let sum = 0;

// for (let [, score] of Object.entries(game.odds)) {
//   sum += score;
// }

// // console.log(sum / Object.entries(game.odds).length);

// // for (let [type, score] of Object.entries(game.odds)) {
// //   type === 'x' ?
// //   console.log(`Odd of ${type} draw: ${score}`)
// //   : console.log(`Odd of ${type} ${game[type]}: ${score}`);
// // }

// const scorers = {};

// for (let name of game.scored.values()) {
//   if (Object.hasOwn(scorers, name)) {
//     scorers[name] += 1;
//   } else {
//     scorers[name] = 1;
//   }
// }
// const ab = [1, 2];
// const cd =  [1, 2];
// console.log('Сравнение', ab === cd);

/* Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

for (let [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${value}`);
  } else {
    console.log(`[SECOND HALF] ${value}`)
  }
}

// / Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const output = document.querySelector('textarea').value;
  const pattern = '✅';
  const outputArr = output.split('\n');
  let counter = 1;

  for (let word of outputArr) {
    const [first, second] = word.trim().toLowerCase().split('_');
    const secondUpper = second.replace(second[0], second[0].toUpperCase());
    const resStr = `${first}${secondUpper}`
    console.log(resStr.padEnd(20, ' ') + pattern.repeat(counter));
    counter++;
  }
});
