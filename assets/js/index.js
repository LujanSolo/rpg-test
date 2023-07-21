import characterData from './data.js';
import Character from './Character.js';

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function attack() {
  console.log('clicked');
};

document.getElementById('attack-btn').addEventListener('click', attack);
document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
document.getElementById('monster').innerHTML = orc.getCharacterHtml();
