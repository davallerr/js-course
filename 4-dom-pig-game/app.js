/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var goalScore, scores, roundScore, activePlayer, gamePlaying;

init();

// for example lecture code bits
/*
// setter
document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// getter
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/


/*
// using btn function as callback function

function btn() {
  // do a thing
}

// btn becomes the callback function
document.querySelector('.btn-roll').addEventListener('click', btn);
*/


// roll dice function
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    // random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    console.log('dice 1: ' + dice1);
    var dice2 = Math.floor(Math.random() * 6) + 1;
    console.log('dice 2: ' + dice2);

    // display result
    var diceDOM1 = document.getElementById('dice-1');
    var diceDOM2 = document.getElementById('dice-2');
    diceDOM1.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';

    // update round score if 1 wasn't rolled
    if(dice1 !== 1 && dice2 !== 1) {
      // check for double 6
      if(dice1 === 6 && dice2 === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();
      }
      // add score
      roundScore += (dice1 + dice2);
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

// hold score function
document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check for win
    if(scores[activePlayer] >= goalScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});


// next player function
function nextPlayer() {
  // next player
  // ternary operator for simple if/else
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  /*
  // doesn't toggle
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.add('active');
  */

  // toggle instead to remove/add
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // remove dice image
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

// initialize new game function
function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  goalScore = document.getElementById('goal-score').value;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  // create winScore
  /*
  var winScoreInput = prompt('How many points to win?');
  console.log(winScoreInput);
  winScore = parseInt(winScoreInput, 10);
  console.log(winScore);

  if(winScoreInput !== /\d+$/) {
    alert('Please enter a number.');
    init();
  }
  */
}

document.querySelector('.btn-goal').addEventListener('click', init);
