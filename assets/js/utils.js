function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
};

function getDicePlacholderHtml(diceCount) {
  return new Array(diceCount).fill("").map(() => {
    return `<div class=placeholder-dice"></div>`
  })
}

export {getDiceRollArray, getDicePlacholderHtml}