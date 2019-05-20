
/*********************************************************************
 * Copiright (c) 2019                                                *
 * @author Ludovico Pinzari                                          *
 * @summary
 * This js file contains the objects and instances needed to execute *
 * the engine.js file. There are 6 main sections:                    *
 * Variable Declarations, Functions, Game Object, Game Instances and *
 * Event Listener.                                                   *
 * The game OOD is included in the Game Object section.              *
 * Basically there is a root object (Entity) and two augmented       *
 * objects (Player, Enemies) that ineherit the properties of the     *
 * root object.                                                      *
 *********************************************************************/


/*************************************************
 *           VARIABLES DECLARATIONS              *
 *************************************************/

/*--------------- constants ---------------------*/

// game board boundaries
const LEFT_B = 0;
const RIGHT_B = 500;
const TOP_B = 0;
const DOWN_B = 498;

/*--------------DOM Oject variables -------------*/

// modal Elements - (new game button)
let okbutton = document.querySelector('#ok-Button');


/*************************************************
 *                FUNCTIONS                      *
 *************************************************/

 /**
 * @desc display the results of the pop-up screen victory
 * @see displayRating()
 */
 function displayResult() {

     result.style.display = 'block';

     h1Res.innerHTML = 'Congratulations!';
     pRes.innerHTML = 'You escaped from the Bugs Island. <br> Click Continue to Play again.';
 }

/************************************************
 *            GAME  OBJECTS                     *
 ************************************************/

/*-------------- ROOT OBJECT -------------------*/

/* Oject: Entity
 *
 * Description.
 *  Entity is a global object which is used to create, move and draw an image Entity
 *  on the screen. The position of the image is relative to a canvas 2d context.
 *
 * Entity instances Properties.
 *  Entity.x {number} The Entity image's horizontal position
 *  Entity.y {number} The Entity image's vertical position
 *  Entity.sprite {string} The Entity image's source path
 *
 * Entity instances Methods.
 *  Accessor
 *   Entity.getSprite() returns the Entity image's path. Property {sprite}
 *   Entity.spriteToString() returns the Entity image's file name.
 *  Mutator
 *   Entity.setSprite() change the Entity image's path. Property {sprite}
 *   Entity.move(horizontal, vertical) change the position of the Entity object. Properties {x,y}
 *  General
 *   Entity.render() draws the Entity image on the screen at the current position (x,y)
*/

class Entity {

    /** CONSTRUCTOR
     * @constructs function that creates an Entity object with a given position and image
     * @param {number} x image x-offset start position
     * @param {number} y image y-offset start position
     * @param {string} img image source path
     */

    constructor(x, y, img){
        this.x = x;
        this.y = y;
        this.sprite = img;
    }

    /* -------- ACCESSOR METHODS ------------*/

    /**
     * @desc accessor method that returns the image's source path of this object
     * @param {none}
     * @return {string}
     */

    getSprite(){
        return this.sprite;
    }

    /**
     * @desc accessor method that returns the image's file name of this object
     * @param {none}
     * @return {string}
     */

    spriteToString(){
        return this.getSprite().split('/')[1].split('.')[0].replace('-',' ');
    }

    /**
     * @desc accessor method that returns the current position (x,y) of this object
     * @param {none}
     * @return {array} number
     */

    getXY(){
        return [this.x, this.y];
    }

    /* -------- MUTATOR METHODS ------------*/


    /**
     * @desc mutator method to change the image path
     * @param {string} img image source path
     * @return {none}
     */

    setSprite(img){
        this.sprite = img;
    }

    /**
     * @desc mutator method to set the image position
     * @param {number} x image x-offset position
     * @param {number} y image y-offset position
     * @return {none}
     */

    setXY(x, y){
        this.x = x;
        this.y = y;
    }


    /**
     * @desc mutator method to move the image position
     * @param {number} dx horizontal movement
     * @param {number} dy vertical movement
     * @return {none}
     */

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    /* -------- GENERAL METHODS ------------*/

    /**
     * @desc general method to draw the image on the screen at the current position
     * @param {none}
     * @return {none}
     */

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

/*
 * Object: Player
 *
 * Description.
 *  Player is an Entity object which can be controlled by the user
 *
 * Player instances Properties.
 *  inherited by Entity
 *
 * Player instances Methods.
 *  Accessor
 *   Player.spriteToString() returns a description of the player object
 *  Mutator
 *   Player.resetXY() set the Player's position to the initial position.
 *   Player.update() Update the position of this object. The game ends when the object reaches the top.
 *   Player.handleInput(keyCode) change the position of the player object given a keyboard's input
*/


class Player extends Entity {


    /** CONSTRUCTOR
     * @constructs function that creates a Player object with a given position
     * @augments Entity
     * @param {number} x image x-offset start position
     * @param {number} y image y-offset start position
     * @param {string} img image source path
     * @see Entity
     */

    constructor(x = 200, y = 415, img = 'images/char-boy.png'){
        super(x,y,img);
    }

    /* -------- ACCESSOR METHODS ------------*/

    /**
     * @desc accessor method that returns a description of the Player object
     * @param {none}
     * @return {string}
     * @see Entity.spriteToString()
     */

    spriteToString(){
        name = super.spriteToString().substring(5,name.lenght);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    /* -------- MUTATOR METHODS ------------*/

    /**
     * @desc mutator method to reset the Player's position to the initial position.
     * @param {none}
     * @return {none}
     * @see Entity.setXY()
     */

    resetXY(){
        super.setXY(200,415);
    }

    /**
     * @desc mutator method to update the Player's position
     * @param {none}
     * @return {none}
     * @see Entity.getXY()
     */

    update(){

        // get the current position
        const [pX, pY] = super.getXY();

        /* if the current position is off screen returns to the previous position.
        *  If the player reaches the top of the game board a modal pop-up victory
           shows up. */
        if (pX < LEFT_B){
            // move right
            super.move(100,0);
        } else if (pX >= RIGHT_B){
            // move left
            super.move(-100,0);
        } else if (pY >= DOWN_B){
            // move up
            super.move(0,-83);
        } else if (pY <= TOP_B){
            // keep the current position, you won
            super.setXY(pX,0);
            // modal pop-up victory
            displayResult();
        } else {
            // keep the current position
            super.move(0,0);
        }


    }

    /**
     * @desc mutator method to change the Player position for the key's stroke
     * @param {string} keycode code of the keyboard input
     * @return {none}
     */

    handleInput(keyCode){

        switch(keyCode){
			case 'left':
                super.move(-100,0);
				break;
			case 'right':
                super.move(100,0)
				break;
			case 'up':
                super.move(0,-83);
				break;
			case 'down':
                super.move(0,83);
				break;
		}
    }

}

/* Object: Enemy
 *
 * Description.
 *  Enemy is an Entity object
 *
 * Enemy instances Properties.
 *  inherited by Entity
 *  Enemy.speed {number} Real positive number to set the velocity of the Enemy.
 *
 * Enemy instances Methods
 * Mutator
 *  Enemy.update {none} change the position of this object.
*/


class Enemy extends Entity {

    /** CONSTRUCTOR
     * @constructs function that creates a Player object with a given position
     * @augments Entity
     * @param {number} x image x-offset start position
     * @param {number} y image y-offset start position
     * @param {string} img image source path
     * @param {number} speed velocity factor of the object
     * @see Entity
     */

    constructor(x = -100, y = 83, speed = 3,  img = 'images/enemy-bug.png'){
        super(x,y,img);
        this.speed = speed;
    }

    /* -------- MUTATOR METHODS ------------*/

    /**
     * @desc mutator method to update the Enemy's position.
     * @param {number} dt parameter to ensure the game runs at the same speed for all computers
     * @return {none}
     * @see Entity.getXY()
     */

    update(dt){

        // get the current position
        const [pX, pY] = super.getXY();

        // the enemy moves only horizontally

        if(pX > RIGHT_B){
            // if the position is off the screen returns to the initial position
            super.setXY(-100,pY);
        } else {
            super.move(100*this.speed*dt,0);
        }

    }


}

/*********************************************
 *        GAME INSTANCES                     *
 *********************************************/

// Place the player object in a variable called player
const player = new Player ();

// Place all enemy objects in an array called allEnemies
const e_1 = new Enemy();
const e_2 = new Enemy(-300,166,1);
const e_3 = new Enemy(-100,166,1);
const e_4 = new Enemy(-200,249,3);
const allEnemies = [e_1,e_2,e_3,e_4];


/********************************************
 *         EVENT LISTENER                   *
 *********************************************/

/*--------------KEY PRESS ------------------*/

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
// the keys are the arrows on the keyboard
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/*--------------CLICK EVENT -------------------*/

 // Set up an event listener for a click on the Continue button of the modal
 okbutton.addEventListener('click',startNewGame);


/*---Functions attached to the click Event listeners ---*/

/**
* @desc close the pop up victory screen and reload the page
*/
function startNewGame () {

    result.style.display = 'none';
    location.reload();

}
