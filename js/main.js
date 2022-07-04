/*----- constants -----*/
/* 1. we create the variable that wont change 
        1-1. A variable for The number of time you can spin in one game (5)
*/
const SLOT_LOOKUP ={
        1: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/plum-128.png",
        2: "https://www.shareicon.net/data/256x256/2016/10/11/841519_numbers_512x512.png",
        3: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-128.png",
        4: "https://www.usaonlinecasino.com/wp-content/uploads/2019/04/if_casino_slot_poker_money_834387.png",
        5: "https://www.katiewager.com/wp-content/uploads/2018/05/slot-machine-1.png",
}
/*----- app's state (variables) -----*/
/* 2. variables that change throughout the game  
        2-1. a variable for how many spins left
        2-2. a varibale for the 5 changing slots
        2-3. a variable for the winnings each spin
        2-4. a variable for indientfy the gamestatus
*/
let gamestatus;
let spinsleft;
let amount;
let results;
/*----- cached element references -----*/
/* 3. pull the html documents into javascript
3-1. cach the winnings tag 
3-2. cach the playagain button
3-3. cach the switch
3-4. cach slot sections
3-5. cach the spins-left section
*/
let winnEl = document.getElementById('wins');
let SpinEl = document.getElementById('spin');
let imgEl1 = document.getElementById('sect1');
let imgEl2 = document.getElementById('sect2');
let imgEl3 = document.getElementById('sect3');
let imgEl4 = document.getElementById('sect4');
let imgEl5 = document.getElementById('sect5');
/*----- event listeners -----*/
/* 4. create event listeners for the slots
        4-1. Event listener play again
        4-2. Event listener Switch for next spin    
*/
document.querySelector('.parent').addEventListener('click', handleSwitch);
/*----- functions -----*/
/* 5.  create the functions to run the content and logic of the game
        5-1. Initialize() to call for the game to start
        5-2. create a function for for the event listener called handleSwitch()
        5-3. create a function that gets the game status and judges whether to end, or keep playing
        5-4. create a function that calcuates the amount of combos to get money
        5-5. create a function that renders the slots on the screen
        5-6. create a fucntion that initializes the whole game, so rests everything to zero

*/
init()

function init() {
        amount = 1000;
        spinsLeft = 5;
        results = {
                sL1: 1,
                sL2: 1,
                sL3: 1,
                sL4: 1,
                sL5: 1,
        };
        gamestatus='';
        render();
}
// in response to user interaction(click),
//the slots should change to random(introduce random function)
function handleSwitch(evt) {
        //guard
        if(evt.target.tagName !== 'BUTTON') return;
        console.log(evt.target);
        // evt.target.textContent = ''
        //function to randomize the slotmachine results
        results = getRandomSlots();

        render();
}

function getRandomSlots() {
        const rndSlot = Object.keys(SLOT_LOOKUP);
        
}

function render() {
        renderScore();
        renderResults();
}

function renderScore() {
        winnEl.textContent = amount;
        SpinEl.textContent = spinsLeft;
}

function renderResults() {
        imgEl1.src = SLOT_LOOKUP[results.sL1];
        console.log(imgEl1);
        imgEl2.src = SLOT_LOOKUP[results.sL2];
        console.log(imgEl2);
        imgEl3.src = SLOT_LOOKUP[results.sL3];
        console.log(imgEl3);
        imgEl4.src = SLOT_LOOKUP[results.sL4];
        console.log(imgEl4);
        imgEl5.src = SLOT_LOOKUP[results.sL5];
        console.log(imgEl5);
}
