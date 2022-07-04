<!-- /*----- constants -----*/
const RPS_LOOKUP = {
  r: {img: 'imgs/rock.png', beats: 's'},
  p: {img: 'imgs/paper.png', beats: 'r'},
  s: {img: 'imgs/scissors.png', beats: 'p'},
};

/*----- app's state (variables) -----*/
let scores; // Object with keys of 'p' (player), 't' (tie) & 'c' (computer)
let results; // Object with keys of 'p' & 'c'
let winner;  // '', 'p', 't', 'c'

/*----- cached element references -----*/
const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleChoice);

/*----- functions -----*/
init();

// Initialize all state, then call render
function init() {
  scores = {
    p: 0,
    t: 0,
    c: 0,
  };
  results = {
    p: 'r',
    c: 'r'
  };
  winner = '';
  render();
}

// In response to user interaction (click), we update all 
// impacted state, then call render()
function handleChoice(evt) {
  // Guards
  if (evt.target.tagName !== 'BUTTON') return;
  results.p = evt.target.textContent.toLowerCase();
  // randomly get computer's choice
  results.c = getRandomRPS();
  winner = getWinner();
  scores[winner] += 1;
  render();
}

function getWinner() {
  if (results.p === results.c) return 't';
  return RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c';
}

function getRandomRPS() {
  const rps = Object.keys(RPS_LOOKUP);
  const rndIdx = Math.floor(Math.random() * rps.length);
  return rps[rndIdx];
}

// transfer/visualize all state to the DOM
function render() {
  renderScores();
  renderResults();
}

function renderResults() {
  pResultEl.src = RPS_LOOKUP[results.p].img;
  cResultEl.src = RPS_LOOKUP[results.c].img;
}

function renderScores() {
  for (let scoreKey in scores) {
    // TODO: refactor for efficiency
    const scoreEl = document.getElementById(`${scoreKey}-score`);
    scoreEl.textContent = scores[scoreKey];
  }
} -->