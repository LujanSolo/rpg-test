function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1
  })
};

const characterData = {
  hero: {
    elementId: "hero",
    name: "Wizard",
    avatar: "assets/images/wizard.png",
    health: 60,
    diceCount: 3
  },

  monster: {
    elementId: "monster",
    name: "Orc",
    avatar: "assets/images/orc.png",
    health: 10,
    diceCount: 1
  },
};

function Character(data) {
  Object.assign(this, data)
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
  `
  };

  this.getDiceHtml = (diceCount) => {
    return getDiceRollArray(diceCount).map((num) => {
      return `<div class="dice">${num}</div>`
    }).join("")
  }
};

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

// separation of concerns
document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
