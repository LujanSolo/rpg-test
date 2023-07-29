function diceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
};

function dicePlaceholderHtml(diceCount) {
  return new Array(diceCount).fill(0).map(() => 
    `<div class="placeholder-dice"></div>`
    ).join("");
};

const getPercentage = (currentHealth, maximumHealth) => Math.floor((100 * currentHealth) / maximumHealth);

export {diceRollArray, dicePlaceholderHtml, getPercentage}
