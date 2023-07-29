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
  if (wizard.dead) {
    endGame();
  }
  else if (monster.dead) {
    setTimeout(() => {
      if (monsterArray.length > 0) {
        setTimeout
        monster = getNextMonster();
        render();
      }
      else {
        endGame();
      }
    }, 1000);

  };
};

function endGame() {
  const endMessage = wizard.health > monster.health ? "The Wizard Wins" : monster.health > wizard.health ? "The monster feasts tonight!" : "No victors here.";
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  setTimeout(() => {
    document.body.innerHTML = `
    <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>`
  }, 1500);
}

function render() {
  document.getElementById('hero').innerHTML = wizard.characterHtml();
  document.getElementById('monster').innerHTML = monster.characterHtml();
}

render();