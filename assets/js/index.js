import characterData from './data.js';
import Character from './Character.js';


const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

document.getElementById('attack-btn').addEventListener('click', attack);

function attack() {
  orc.getDiceHtml();
  wizard.getDiceHtml();
  orc.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(orc.currentDiceScore);
  renderToons();
  if (orc.dead || wizard.dead) {
    endGame();
  }
};

function endGame() {
  const endMessage = wizard.health > orc.health ? "The Wizard Wins" : orc.health > wizard.health ? "The Orc feasts tonight!" : "No victors here."
  console.log(endMessage);
}

function renderToons() {
  document.getElementById('hero').innerHTML = wizard.characterHtml();
  document.getElementById('monster').innerHTML = orc.characterHtml();
}

renderToons();