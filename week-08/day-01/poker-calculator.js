module.exports = (blackHand, whiteHand) => {
  cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

  const blackCards = blackHand.map(card => card.split(''));
  const whiteCards = whiteHand.map(card => card.split(''));
  //utolsó lap nagyobb-e
  highestWhite = whiteCards[4][0];
  highestBlack = blackCards[4][0];

  function checker(cards, color) {
    for (let i = 0; i < 5; i++) {
      if (cards[i + 1] !== undefined) {
        if (cards[i][0] === cards[i + 1][0]) {
          return `${color} wins! - (Pair: ${cards[i][0]})`;
        }
      }
    }
  }

  if (checker(blackCards, 'Black') !== undefined) {
    return checker(blackCards, 'Black');
  }
  if (checker(whiteCards, 'White') !== undefined) {
    return checker(whiteCards, 'White')
  }

  if (cardValues.indexOf(highestBlack) > cardValues.indexOf(highestWhite)) {
    return `Black wins! - (High card: ${highestBlack})`;
  } else {
    return `White wins! - (High card: ${highestWhite})`;
  }
}