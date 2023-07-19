const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "assets/images/wizard.png",
  health: 60,
  diceRoll: 6
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "assets/images/orc.png",
  health: 10,
  diceRoll: 4
}

document.getElementById('hero').innerHTML = `
  <div class="character-card">
    <h4 class="name">Wizard</h4>
    <img class="avatar" src="assets/images/wizard.png" alt="fantasy wizard character" loading="lazy"/>
    <p class="health">health: <b> 60 </b></p>
    <div class="dice-container"><div class="dice">6</div></div>
  </div>
`;

document.getElementById('monster').innerHTML = `
  <div class="character-card">
  <h4 class="name"> Orc </h4>
  <img class="avatar" src="assets/images/orc.png"   alt="fantasy orc character" loading="lazy"/>
  <p class="health">health: <b> 10 </b></p>
  <div class="dice-container"><div class="dice"> 4 </div></div>
`;