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