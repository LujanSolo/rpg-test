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
  };

  this.getHealthBar = () => {
    const percent = getPercentage(this.health, this.maxHealth);
    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent <= 25 ? "danger" : ""} " 
        style="width: ${percent}%;">
        </div>
      </div>
    `
  }

  this.characterHtml = () => {
    const { name, avatar, health, diceArray } = this;
    const healthBar = this.getHealthBar();
    return `
          <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <p class="healthcount">health: <b> ${health} </b></p>
            <p class="bar">${healthBar}</p>
            <div class="dice-container box">
              ${diceArray}
            </div>
          </div>`;
  };
};

export default Character;