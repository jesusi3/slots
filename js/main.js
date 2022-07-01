/*----- constants -----*/
/* 1. we create the variable that wont change 
        1-1. A variable for The number of time you can spin in one game (5)
*/
const SLOT_LOOKUP ={
        itemCard1
}
/*----- app's state (variables) -----*/
/* 2. variables that change throughout the game  
        2-1. a variable for how many spins left
        2-2. a varibale for the 5 changing slots
        2-3. a variable for the winnings each spin
        2-4. a variable for indientfy the gamestatus
*/
let gamestatus;
let spins_left;
let ;
/*----- cached element references -----*/
/* 3. pull the html documents into javascript
3-1. cach the winnings tag 
3-2. cach the playagain button
3-3. cach the switch
3-4. cach slot sections
3-5. cach the spins-left section
*/
let winnEl = document.getElementById('wins');
console.log(winnEl)
let SpinEl = document.getElementById('spin');
/*----- event listeners -----*/
/* 4. create event listeners for the slots
        4-1. Event listener play again
        4-2. Event listener Switch for next spin    
*/
/*----- functions -----*/
/* 5.  create the functions to run the content and logic of the game
        5-1. Initialize() to call for the game to start
        5-2. create a function for for the event listener called handleSwitch()
        5-3. create a function that gets the game status and judges whether to end, or keep playing
        5-4. create a function that calcuates the amount of combos to get money
        5-5. create a function that renders the slots on the screen
        5-6. create a fucntion that initializes the whole game, so rests everything to zero

*/
