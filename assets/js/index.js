import characterData from './data.js';
import Character from './Character.js';

const opponentArray = ["orc", "demon", "goblin"];

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

document.getElementById('attack-btn').addEventListener('click', attack);

function getNextOpponent() {
  const nextCharData = opponentArray.shift().characterHtml();
}

function attack() {
  orc.getDiceHtml();
  wizard.getDiceHtml();
  orc.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(orc.currentDiceScore);
  render();
  if (orc.dead || wizard.dead) {
    endGame();
  }
};

function endGame() {
  const endMessage = wizard.health > orc.health ? "The Wizard Wins" : orc.health > wizard.health ? "The Orc feasts tonight!" : "No victors here.";
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  document.body.innerHTML = `
    <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>
  `
  console.log(endMessage);
}

function render() {
  document.getElementById('hero').innerHTML = wizard.characterHtml();
  document.getElementById('monster').innerHTML = orc.characterHtml();
}

render();