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

export function getDeckArr() {
  let deviceType = this.getDeviceType();
  let deckArr = this.createDeck(deviceType);
  deckArr = this.shuffle(deckArr);
  return deckArr;
}

export function createDeck(deviceType) {

  let max = 4;
  if (deviceType === 'mobile') {
    max = 7;
  }

  let deckArr = [];
  let suitArr = ['heart', 'club', 'diamond', 'spade'];
  for(let suit of suitArr) {
    for(let i = 2; i <= max; i++) {
      let cardObj = {rank: i, suit: suit};
      deckArr.push(cardObj);
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

export function convertRank(rank) {

  switch(rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank;
  }

}

