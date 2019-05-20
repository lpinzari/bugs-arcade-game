# Bugs Island Arcade Game

Bugs Island is a Frogger Arcade Game built with **JS(ES6), HTML5 CANVAS** and basic **CSS**.

## Table of Contents

- [Game Rules](#game-rules)
- [Game Screenshots](#game-screenshots)
- [Game Functional Requirements](#game-functional-requirements)
- [Game Design](#game-design)
- [How to Run and Play the Game](#how-to-run-and-play-the-game)
- [Technologies used](#technologies-used)
- [Dependencies](#dependencies)
- [Future features](#future-features)

## Game Rules

In this game you have a player and enemies (**Bugs**). The goal of the player is to reach the water, without colliding into anyone of the enemies.

## Game Screenshots

**Fig 1. Game board**

![alt bugs](/screen/game_bugs.JPG)

**Fig 2. Winning game**

![alt modal](/screen/game_bugs_win.JPG)


## Game Functional Requirements

The basic  functionalities to be implemented are:

1. ***Design*** and ***create*** the game objects needed to run the game.
2. ***Control*** the ***users' input*** to move the player on the game board. A player can move LEFT, RIGHT, UP and DOWN.
3. ***Implement*** the enemies ***motion logic***. The enemies move at varying speeds on the paved block portion of the game board.
4. ***Implement*** the ***collision logic***. Once the player collides with an enemy, the Game is reset and the player moves back to the starting square position.
5. ***Create*** a ***pop-up modal*** when player ***wins*** game. Once the player reaches the water (i.e the top of the game board), the game is won (**Fig 2**).  

## Game Design

The application consists of the following files:

- **index.html**: This file executes the JS files that control the logic of the game. It includes only a modal section to show up when the player wins.

Three folders:

- *css*:
    - **style.css**: it contains the styling of the modal pop-up.
- *js*:
    - **app.js**: it includes the *Object Oriented Design* of the application.
    - **engine.js**: it includes the gane loop functionality (update entities and render), draws the initial game board on the screen and the collision logic.
    - **resource.js**: This is simply an image loading utility.
- *images*: it contains the png image files, which are used when displaying the game.

## How to Run and Play the Game

- **Run**: Click [here](https://lpinzari.github.io/bugs-arcade-game/) to play the LivePeview of the Game hosted on GitHub. If you want to run the game *locally* on your computer,you can download the files from this repository or clone them.

- **Download**: Click the `Clone or download` green button and you'll get the *Project Zip* file. When your download finishes, unzip the file and open the `index.html` on your browser.

- **Clone**: type into your terminal the following <code> $ git clone https://github.com/lpinzari/bugs-arcade-game.git </code>. When it finishes cloning, open the `index.html` file on your browser.

- **Play**: The application is usable on any device that support a key arrows control. The key's symbol are: `<-`(LEFT), `->` (RIGHT) and corrsponding UP and DOWN arrows.

## Technologies used
- **HTML5 CANVAS | JS(ES6) | CSS**

### Dependencies
- [Fontawsome 4.6.1](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css) to display the smile's symbol on the modal.

### Acknowledgement
I'd like to thank the Udacity's instructors for the precious resources and video lectures.

### Future features
This is only the starter game logic and additional interesting features will be added soon:

- Add Player selection: Allow the user to select the image for the player character before starting the game.
- Add Score: Implement a score for the game.
- Add Collectibles: Add gems to the game.
- Add a Timer.
- Add Multyple Enemies types.
- Add Touch screen functionality for mobile devices.

#### Author
Ludovico Pinzari

#### License
MIT
