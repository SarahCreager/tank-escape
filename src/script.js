'use strict';

// -------------Character Jump Functionality------------ //

// creates a reference to the character
const character = document.getElementById('character');

// listens for user click and invokes the jump() function
// document.addEventListener('click', jump);

// listens for spacebar and invokes the jump() function
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    jump();
  }
});

function jump() {
  // checks if the animation is already running (eliminates double clicks)
  if (character.classList === 'animate') { return; }
  // adds 'animate' class to character whenever user clicks
  character.classList.add('animate');
  // adds timeout function that invokes removeJump() when animation ends
  setTimeout(removeJump, 500); //350ms = length of jump animation
}

// removes 'animate' class from character
function removeJump() {
  character.classList.remove('animate');
}

// ------------Block Left to Right Functionality---------- //

// creates a reference to the block
const block = document.getElementById('block');

// listens for start button and invokes the startGame() function
document.addEventListener('click', runGame);

function runGame() {
  // clears out heading on game start
  document.getElementById('gameOver').innerHTML = '';

  // checks if the game is already running (eliminates double submits)
  if (block.classList === 'runGame') { return; }
  // adds 'runGame' class to character whenever user clicks
  block.classList.add('runGame');
}

// removes 'startGame' class from character
function endGame() {
  block.classList.remove('runGame');
}

// gets position of block and character, evaluates if they are on top of each other, ending the game
function checkDead() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft <= 95 && blockLeft >= -120 && characterTop >= 170) {
    // alert('Game over');
    let h2Elem = document.getElementById('gameOver');
    addTitle('td', h2Elem, 'Game Over');
    endGame();
  }
}

// check if character is dead every 10 milliseconds
setInterval(checkDead, 10);

function addTitle(tagName, parent, textContent){
  let element = document.createElement(tagName);
  element.textContent = textContent;
  parent.appendChild(element);
  return element;
}

