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

let totalScore;
let currentScore; 
let activePlayer;
let playing;

function init() {
  dice.classList.add('hidden');

  score0.textContent = 0;
  score1.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  totalScore = [0, 0];
  currentScore = 0; 
  activePlayer = 0;
  playing = true;
}

init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

function checkWinner() {
  if (totalScore[activePlayer] >= 20) {
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    dice.classList.add('hidden');
  }
} 

buttonRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.ceil(Math.random() * 6);

    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function() {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
    checkWinner();
    switchPlayer();
  }  
});

buttonNew.addEventListener('click', init);



