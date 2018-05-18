
const img1 = './dice-1.png';
const img2 = './dice-2.png';
const img3 = './dice-3.png';
const img4 = './dice-4.png';
const img5 = './dice-5.png';
const img6 = './dice-6.png';

const scoreInput = document.querySelector('#input-score');

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

var winnerScore;

scoreInput.addEventListener('change', function(event){
  event.preventDefault();
  const score = event.target.value;
  winnerScore = score;
});

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
    if(scoreTotal >= winnerScore){
      alert('You won!');
    }
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
    if(scoreTotal >= 100){
      alert('You won!');
    };
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


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
