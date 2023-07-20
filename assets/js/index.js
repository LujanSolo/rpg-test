const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "assets/images/wizard.png",
  health: 60,
  diceRoll: [],
  diceCount: 3
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "assets/images/orc.png",
  health: 10,
  diceRoll: [],
  diceCount: 1
};

function getDiceRollArray(diceCount) {
  const randomDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
    randomDiceRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return randomDiceRolls;
};

function getDiceHtml(diceCount){
  return getDiceRollArray(diceCount).map((num) => {
    return `<div class="dice">${num}</div>`
  }).join("")
};

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
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
};

renderCharacter(hero);
renderCharacter(monster);
