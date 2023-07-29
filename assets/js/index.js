import characterData from './data.js';
import Character from './Character.js';

const monsterArray = ["orc", "demon", "goblin"];
const wizard = new Character(characterData.hero);
let monster = getNextMonster();

document.getElementById('attack-btn').addEventListener('click', attack);

function getNextMonster() {
  const nextCharData = characterData[monsterArray.shift()];
  return nextCharData ? new Character(nextCharData) : {};
};

function attack() {
  monster.getDiceHtml();
  wizard.getDiceHtml();
  monster.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(monster.currentDiceScore);
  render();
  if (monster.dead || wizard.dead) {
    endGame();
  }
};

function endGame() {
  const endMessage = wizard.health > monster.health ? "The Wizard Wins" : monster.health > wizard.health ? "The monster feasts tonight!" : "No victors here.";
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
  document.getElementById('monster').innerHTML = monster.characterHtml();
}

render();