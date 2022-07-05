/*----- constants -----*/
const SLOT_LOOKUP ={
        1: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/plum-128.png",
        2: "https://www.shareicon.net/data/256x256/2016/10/11/841519_numbers_512x512.png",
        3: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-128.png",
        4: "https://www.usaonlinecasino.com/wp-content/uploads/2019/04/if_casino_slot_poker_money_834387.png",
        5: "https://www.katiewager.com/wp-content/uploads/2018/05/slot-machine-1.png",
        // 6: "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/diamond-256.png",
        // 7: "https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_horse_shoe-256.png"
};

const WINNING_COMBOS = [
        [1,1,1],
        [2,2,2],
        [3,3,3],
        [4,4,4],
        [5,5,5],
];
/*----- app's state (variables) -----*/
let gamestatus;
let spinsleft;
let amount;
let results;
/*----- cached element references -----*/
let winnEl = document.getElementById('wins');
let SpinEl = document.getElementById('spin');
let imgEl1 = document.getElementById('sect1');
let imgEl2 = document.getElementById('sect2');
let imgEl3 = document.getElementById('sect3');
let imgEl4 = document.getElementById('sect4');
let imgEl5 = document.getElementById('sect5');
/*----- event listeners -----*/
document.querySelector('.parent').addEventListener('click', handleSwitch);
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
        gamestatus='';
        render();
}
// in response to user interaction(click),
//the slots should change to random(introduce random function)
function handleSwitch(evt) {
        //guard
        if(evt.target.tagName !== 'BUTTON') return;
        //function to randomize the slotmachine results
        results.sL1 = getRandomSlots();
        results.sL2 = getRandomSlots();
        results.sL3 = getRandomSlots();
        results.sL4 = getRandomSlots();
        results.sL5 = getRandomSlots();
        amount = getTotal();
        render();
} 

function getTotal(){
        // let asArray = Object.fromEntries(results);
        // let filtered = asArray.filter(function(num){
        //         return num.results.keys
        // });

        // if(results.sL1 === results.sL2 && results.sL3){
        //         if(results.sL1 === results.sL4 && results.sL5){
        //                 amount *= 2;
        //         }
        // }return amount;
        for( let key in results){
                
        }
        // console.log(Object.values(results))
}

function getRandomSlots() {
        const rndSlot = Object.keys(SLOT_LOOKUP);
        const rndIdx = Math.floor(Math.random() * rndSlot.length);
        return rndSlot[rndIdx];
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
        imgEl2.src = SLOT_LOOKUP[results.sL2];
        imgEl3.src = SLOT_LOOKUP[results.sL3];
        imgEl4.src = SLOT_LOOKUP[results.sL4];
        imgEl5.src = SLOT_LOOKUP[results.sL5];
}
