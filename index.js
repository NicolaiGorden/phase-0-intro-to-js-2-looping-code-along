// Code your solutions in this file
function writeCards(names, event) {
    let cardArray = [];
    for (let i = 0; i < names.length; i++) {
        let cardText = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        cardArray.push(cardText);
        debugger;
    }
return cardArray
}

function countDown(int = 0) {
    while (int > -1) {
      console.log(int--);
    }
  }