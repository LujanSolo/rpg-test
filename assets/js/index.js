import characterData from './data.js';
import { getDiceRollArray } from './utils.js';


function Character(data) {
  Object.assign(this, data);
  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount } = this;
    const diceHtml = this.getDiceHtml(diceCount);

    return `
    <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src=${avatar} alt="fantasy ${name} caricature" />
      <p class="health">Health: <b>${health}</b></p>
      <div class="dice-container">
        ${diceHtml}
      </div>
    </div>
  `;
  };

  this.getDiceHtml = (diceCount) => {
    return getDiceRollArray(diceCount)
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

// separation of concerns
document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
