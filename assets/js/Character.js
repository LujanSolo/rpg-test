import { diceRollArray, dicePlaceholderHtml } from './utils.js';

function Character(data) {
  Object.assign(this, data)

  this.diceArray = dicePlaceholderHtml(this.diceCount);

  this.getDiceHtml = () => {
    this.currentDiceScore = diceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore.map((num) => {
      return `<div class="dice">${num}</div>`
    }).join('');
  };

  this.characterHtml = () => {
    const { name, avatar, health, diceCount, diceArray } = this;
    
    return `
          <div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}" />
              <div class="health">health: <b> ${health} </b></div>
              <div class="dice-container">
                  ${diceArray}
              </div>
          </div>`;
  }
};

export default Character;