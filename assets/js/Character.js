import { diceRollArray, dicePlaceholderHtml, getPercentage } from './utils.js';

class Character {
  constructor(data){
    Object.assign(this, data)
    this.diceHtml = dicePlaceholderHtml(this.diceCount);
    this.maxHealth = this.health;
  };
  
  setDiceHtml() {
    this.currentDiceScore = diceRollArray(this.diceCount);
    this.diceHtml = this.currentDiceScore.map((num) =>
      `<div class="dice">${num}</div>`
    ).join('');
  };

  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, currentElement) => total + currentElement);
    this.health -= totalAttackScore;
    if (this.health < 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  getHealthBar() {
    const percent = getPercentage(this.health, this.maxHealth);
    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent <= 25 ? "danger" : ""} " 
        style="width: ${percent}%;">
        </div>
      </div>
    `
  }

  getCharacterHtml() {
    const { name, avatar, health, diceHtml } = this;
    const healthBar = this.getHealthBar();
    return `
      <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        ${healthBar}
        <div class="dice-container">
            ${diceHtml}
        </div>
        </div>`;
  };
};

// function Character(data) {
//   Object.assign(this, data)

//   this.diceHtml = dicePlaceholderHtml(this.diceCount);
//   this.maxHealth = this.health;

//   this.setDiceHtml = () => {
//     this.currentDiceScore = diceRollArray(this.diceCount);
//     this.diceHtml = this.currentDiceScore.map((num) =>
//       `<div class="dice">${num}</div>`
//     ).join('');
//   };

//   this.takeDamage = (attackScoreArray) => {
//     const totalAttackScore = attackScoreArray.reduce((total, currentElement) => total + currentElement);
//     this.health -= totalAttackScore;
//     if (this.health < 0) {
//       this.dead = true;
//       this.health = 0;
//     }
//   };

//   this.getHealthBar = () => {
//     const percent = getPercentage(this.health, this.maxHealth);
//     return `
//       <div class="health-bar-outer">
//         <div class="health-bar-inner ${percent <= 25 ? "danger" : ""} " 
//         style="width: ${percent}%;">
//         </div>
//       </div>
//     `
//   }

//   this.getCharacterHtml = () => {
//     const { name, avatar, health, diceHtml } = this;
//     const healthBar = this.getHealthBar();
//     return `
//       <div class="character-card">
//         <h4 class="name"> ${name} </h4>
//         <img class="avatar" src="${avatar}" />
//         <div class="health">health: <b> ${health} </b></div>
//         ${healthBar}
//         <div class="dice-container">
//             ${diceHtml}
//         </div>
//         </div>`;
//   };
// };

export default Character;