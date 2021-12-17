# tank-escape

By Sarah Creager

## Version: 1.0.0

## About

Sometimes the simpliest games can be the ones that capture your attention and make you want to play over and over again. `Tank Escape` is my first game creation as a developer. It is a simple game build with plain JS, HTML, and CSS. Jump over the hungry sharks and get your sea creature to safety! 

## How To Play

1) press the spacebar to jump  
2) if the shark touches your character, the game will end  
3) press the button to start a new game  

## Project Overview

| Title      | Languages/Frameworks/Libraries/Tools |
| ----------- | ----------- |
| Frontend | JavaScript, CSS, HTML |
| Deployed | Netlify |

## User Stories

### JUMP FEATURE

As a gamer, I need to easily jump to avoid the incoming sharks.

Feature Tasks:

- User presses the spacebar to jump character over the shark

Acceptance:

- When user presses the spacebar, the character should jump high enough to clear the shark.

- when the user is not pressing the spacebar, the character should not jump.

- if the user presses the spacebar twice, the character cannot "double jump".

### RESTART FEATURE

As a gamer, I need to easily restart the game and play again.

Feature Tasks:

- User presses the restart button to restart the game

Acceptance:

- When user presses the button, the game will reload and the shark will start moving towards them.

- The game will not automatically start on page load, it will only start when they press the button.

### GAMEOVER FEATURE

As a gamer, I need the game to end when the shark touches me.

Feature Tasks:

- When the user fails to jump over the shark, the game instantly ends.

Acceptance:

- When the shark touches the user's character it triggers the game to end and "Game Over' appears on the screen.

## Resources 

* [Unsplash](https://unsplash.com/)
* [LogRocket](https://blog.logrocket.com/build-a-game-with-html-css-javascript/)
* [Designspiration](https://www.designspiration.com/save/149391372728/)
* [Stack Overflow](stackoverflow.com)
* [MDN Docs](https://developer.mozilla.org/en-US/)
* [W3 Schools](https://www.w3schools.com/)

## Future Implementations

* user has the ability to change characters
* user has the ability to track their score and compete with friends
* add bubble animations to the tank to immerse the user in the game
* user has ability to pause game
* the speed of the sharks increases as user progresses levels
