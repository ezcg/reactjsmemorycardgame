import MobileDetect from "mobile-detect";

export function getDeviceType() {
  let userAgent;
  let deviceType;
  userAgent = navigator.userAgent;
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }
  return deviceType;
}

export function getDeckArr(numCards) {
  let deviceType = this.getDeviceType();
  let deckArr = this.createDeck(deviceType, numCards);
  deckArr = this.shuffle(deckArr);
  return deckArr;
}

export function createDeck() {

  let suitArr = ['heart','spade','diamond', 'club']

  let numCards = 8 // keep it simple
  let maxPairs = numCards / 2 // Two of each card
  let maxSuitsSet = 2 // only use 2 suits

  let deckArr = [];
  // The card suit isn't used to match. A 4 of hearts will match a 4 of spades.
  // The card suit is used to uniquely identify the card on the table.
  for(let i = 1; i <= maxPairs; i++ ){
    let numSuitsSet = 0
    for(let j in suitArr) {
      let cardObj = { rank: i, suit: suitArr[j] };
      deckArr.push(cardObj);
      numSuitsSet++
      if (numSuitsSet === maxSuitsSet) {
        break
      }
    }
  }
  return deckArr;
}

export function shuffle(deckArr) {
  let currentIndex = deckArr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deckArr[currentIndex];
    deckArr[currentIndex] = deckArr[randomIndex];
    deckArr[randomIndex] = temporaryValue;
  }

  return deckArr;

}

// not used, but if a full deck is used (m
export function convertRank(rank) {

  switch(rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
    case 1:
      return "Ace";
    default:
      return rank;
  }

}

