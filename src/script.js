'use strict';

// -------------Character Jump Functionality------------ //

// creates a reference to the character
const character = document.getElementById('character');

// listens for user click and invokes the jump() function
document.addEventListener('click', jump);


function jump() {
  // checks if the animation is already running (eliminates double clicks)
  if (character.classList === 'animate') { return; }
  // adds 'animate' class to character whenever user clicks
  character.classList.add('animate');
  // adds timeout function that invokes removeJump() when animation ends
  setTimeout(removeJump, 300); //300ms = length of animation
}

// removes 'animate' class from character
function removeJump() {
  character.classList.remove('animate');
}

// ------------Block Left to Right Functionality---------- //

// creates a reference to the block
const block = document.getElementById('block');


// gets position of block and character, evaluates if they are on top of each other, ending the game
function checkDead() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    alert('Game over');
  }
}

// check if character is dead every 10 milliseconds
setInterval(checkDead, 10);
