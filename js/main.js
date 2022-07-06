/*----- constants -----*/
const SLOT_LOOKUP = {
    1: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/plum-128.png",
    2: "https://www.shareicon.net/data/256x256/2016/10/11/841519_numbers_512x512.png",
    3: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-128.png",
    4: "https://www.usaonlinecasino.com/wp-content/uploads/2019/04/if_casino_slot_poker_money_834387.png",
    5: "https://www.katiewager.com/wp-content/uploads/2018/05/slot-machine-1.png",
};

/*----- app's state (variables) -----*/
let gameStatus;
let spinsleft;
let amount;
let results;
/*----- cached element references -----*/
const replayBtn = document.querySelector('#play-again');
const msgEl = document.querySelector('h2');
const switchBtn = document.querySelector('#switch');
let winnEl = document.getElementById('wins');
let SpinEl = document.getElementById('spin');
let imgEl1 = document.getElementById('sect1');
let imgEl2 = document.getElementById('sect2');
let imgEl3 = document.getElementById('sect3');
let imgEl4 = document.getElementById('sect4');
let imgEl5 = document.getElementById('sect5');
/*----- event listeners -----*/
switchBtn.addEventListener('click', handleSwitch);
replayBtn.addEventListener('click', init);
/*----- functions -----*/
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
    gameStatus = null;
    switchBtn.style.visibility = 'visible';
    render();
}
// in response to user interaction(click),
//the slots should change to random(introduce random function)
function handleSwitch(evt) {
    //guard
    if (evt.target.tagName !== 'BUTTON') return;
    // console.log(evt.target)
    //function to randomize the slotmachine results
    
    results.sL1 = getRandomSlots();
    results.sL2 = getRandomSlots();
    results.sL3 = getRandomSlots();
    results.sL4 = getRandomSlots();
    results.sL5 = getRandomSlots();
    amount = getTotal();
    gameStatus = getGameStatus();
    spinsLeft--;
    render();
}

function getGameStatus() {
    if (spinsLeft > 1) {
        return null;
    } else
        switchBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
    return 'A';
}

function getTotal() {
    let five = Object.values(results);
    const count = five.reduce(function(tally, vote) {
        tally[vote] = tally[vote] ? tally[vote] + 1 : 1;
        return tally;
    }, [])

    let three = count.find(function(x) {
        return x > 2
    })
    if (three > 2) {
        amount *= 2
    }
    return amount;
}

function getRandomSlots() {
    getInterval();
    const rndSlot = Object.keys(SLOT_LOOKUP);
    const rndIdx = Math.floor(Math.random() * rndSlot.length);
    return rndSlot[rndIdx];
}

function getInterval() {
     
}

function render() {
    renderScore();
    renderResults();
    renderMessage();
    replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function renderScore() {
    winnEl.textContent = amount;
    SpinEl.textContent = spinsLeft;
}

function renderResults() {
    setTimeout( () => {
        imgEl1.src = SLOT_LOOKUP[results.sL1]},500);
    setTimeout( () => {
        imgEl2.src = SLOT_LOOKUP[results.sL2]},1000);
    setTimeout( () => {
        imgEl3.src = SLOT_LOOKUP[results.sL3]},1500)
    setTimeout( () => {
        imgEl4.src = SLOT_LOOKUP[results.sL4]},2000)
    setTimeout( () => {
        imgEl5.src = SLOT_LOOKUP[results.sL5]},2500)
}

function renderMessage() {
    if (gameStatus === null) {
        msgEl.textContent = `You have ${amount}`
    } else if (gameStatus === 'A') {
        msgEl.textContent = `Congratulations, You've Won ${amount}`
    }
}
