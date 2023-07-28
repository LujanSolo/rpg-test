import { diceRollArray, dicePlaceholderHtml } from './utils.js';
const getPercentage = (currentHealth, maximumHealth) => Math.floor((100 * currentHealth) / maximumHealth);

function Character(data) {
  Object.assign(this, data)

  this.diceArray = dicePlaceholderHtml(this.diceCount);
  this.maxHealth = this.health;

  this.getDiceHtml = () => {
    this.currentDiceScore = diceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore.map((num) =>
      `<div class="dice">${num}</div>`
    ).join('');
  };

  this.takeDamage = (attackScoreArray) => {
    const totalAttackScore = attackScoreArray.reduce((total, currentElement) => total + currentElement);
    this.health -= totalAttackScore;
    if (this.health < 0) {
      this.dead = true;
      this.health = 0;
    }
    console.log(getPercentage(this.health, this.maxHealth))

    console.log(`${this.name} takes ${totalAttackScore} damage from opponent!`)
  };

  this.characterHtml = () => {
    const { name, avatar, health, diceArray } = this;

    return `
          <div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}" />
              <div class="health">health: <b> ${health} </b></div>
              <div class="dice-container">
                  ${diceArray}
              </div>
          </div>`;
  };
};

export default Character;