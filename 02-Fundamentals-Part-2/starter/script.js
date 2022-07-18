'use strict'

function describeCountry (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const spain = describeCountry('Spain', 6, 'Barcelona');
const finland = describeCountry('Finland', 4, 'Helsinki');
const latvia = describeCountry('Latvia', 10, 'Riga');

console.log(spain, finland, latvia);
