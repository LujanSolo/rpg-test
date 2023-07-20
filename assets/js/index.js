function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1
  })
};

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount).map((num) => {
    return `<div class="dice">${num}</div>`
  }).join("")
};

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "assets/images/wizard.png",
  health: 60,
  diceCount: 3
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "assets/images/orc.png",
  health: 10,
  diceCount: 1
};

function Character(data) {
  Object.assign(this, data)
  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount } = this;
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src=${avatar} alt="fantasy ${name} caricature" />
      <p class="health">Health: <b>${health}</b></p>
      <div class="dice-container">
        ${diceHtml}
      </div>
    </div>
  `
  }
};

const wizard = new Character(hero)
const orc = new Character(monster)

wizard.getCharacterHtml()
orc.getCharacterHtml()
