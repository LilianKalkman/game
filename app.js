/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const img1 = './dice-1.png';
const img2 = './dice-2.png';
const img3 = './dice-3.png';
const img4 = './dice-4.png';
const img5 = './dice-5.png';
const img6 = './dice-6.png';

const playerPanel1 = document.querySelector('.player-0-panel');
const playerPanel2 = document.querySelector('.player-1-panel');

var dobbelsteenImg = document.querySelector('.dice');
const startBtn = document.querySelector('.btn-roll');

const holdBtn = document.querySelector('.btn-hold');

const eindScore1 = document.querySelector('#score-0');
const eindScore2 = document.querySelector('#score-1');
var currentScore1 = document.querySelector('#current-0');
var currentScore2 = document.querySelector('#current-1');

const newGameBtn = document.querySelector('.btn-new');
const playerScores = document.querySelectorAll('.player-score');
const playerCurrentScores = document.querySelectorAll('.player-current-score');

// active player
var player1Active = true;

// current score arrays
var numArrayPlayer1 = [];
var numArrayPlayer2 = [];

// eindscores array
var eindscoreArray1 = [];
var eindScoreArray2 = [];

startBtn.addEventListener('click', function(event){
  showDobbelsteen();
  // updateCurrentScore();
});

function showDobbelsteen(){
  // dobbelsteen laten zien
  dobbelsteenImg.style.display = 'block';
  const randomNum = Math.floor(Math.random() * 6) + 1;

  const images = [img1, img2, img3, img4, img5, img6];
  const match = images.find(function(item){
    return item.includes(randomNum);
  });
  dobbelsteenImg.src = match;

  // current score bijwerken
  if(player1Active){
    numArrayPlayer1.push(randomNum);
    const score = numArrayPlayer1.reduce(function(totalScore, number){
      return totalScore + number;
    }, 0);
    currentScore1.textContent = score;
  } else {
    numArrayPlayer2.push(randomNum);
    const score = numArrayPlayer2.reduce(function(totalScore, number){
      return totalScore + number;
    }, 0);
    currentScore2.textContent = score;
  }
};


holdBtn.addEventListener('click', function(event){
  if(player1Active){
    const score = currentScore1.innerHTML;
    const scoreNumber = parseInt(score);
    eindscoreArray1.push(scoreNumber);
    const scoreTotal = eindscoreArray1.reduce(function(totalScore, number){
      return totalScore + number;
    }, 0);
    eindScore1.innerHTML = scoreTotal;
    player1Active = false;
    playerPanel2.classList.add('.active');
  } else {
    const score = currentScore2.innerHTML;
    const scoreNumber = parseInt(score);
    eindScoreArray2.push(scoreNumber);
    const scoreTotal = eindScoreArray2.reduce(function(totalScore, number){
      return totalScore + number;
    }, 0);
    eindScore2.innerHTML = scoreTotal;
    player1Active = true;
    playerPanel1.classList.add('.active');
  };
  playerCurrentScores.forEach(function(score){
    score.innerHTML = 0;
  });
  numArrayPlayer1 = [];
  numArrayPlayer2 = [];
});

newGameBtn.addEventListener('click', clearAllScores);

//
// function updateCurrentScore(){
//
// };

function clearAllScores(){
  playerScores.forEach(function(score){
    score.innerHTML = 0;
  });
  playerCurrentScores.forEach(function(score){
    score.innerHTML = 0;
  });
  numArrayPlayer1 = [];
  numArrayPlayer2 = [];
  eindscoreArray1 = [];
  eindScoreArray2 = [];
  dobbelsteenImg.style.display = 'none';
};
