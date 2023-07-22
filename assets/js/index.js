import characterData from './data.js';
import Character from './Character.js';


const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

document.getElementById('attack-btn').addEventListener('click', attack);

function attack() {
  orc.getDiceHtml();
  wizard.getDiceHtml();
  renderToons();
};

function renderToons() {
  document.getElementById('hero').innerHTML = wizard.characterHtml();
  document.getElementById('monster').innerHTML = orc.characterHtml();
}

renderToons();