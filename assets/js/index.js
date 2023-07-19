const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "assets/images/wizard.png",
  health: 60,
  diceRoll: [6, 3, 1],
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "assets/images/orc.png",
  health: 10,
  diceRoll: [4],
  diceCount: 1
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  let diceHtml = '';
  for (i = 0; i < diceCount; i++) {
    diceHtml += `<div class="dice">${diceRoll[i]}</div>`;
  }
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

renderCharacter(hero);
renderCharacter(monster);