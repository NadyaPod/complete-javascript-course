'use strict';
// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const totalScore = [0, 0];
let currentScore = 0; 
let activePlayer = 0;

score0.textContent = 0;
score1.textContent = 0;

dice.classList.add('hidden');

buttonRoll.addEventListener('click', function () {
  const diceNumber = Math.ceil(Math.random() * 6);
  console.log(diceNumber);

  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
