//Card list
const cards = ['diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb', 'diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb'];
   const deck = document.querySelector('.deck');
   let cardItem = [];
   let opened = [];
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
//Place Random cards function
function placeCards() {
  let shuffled = shuffle(cards);
  for (var i = 0; i < shuffled.length; i++) {
     let template = `<li class = "card"><i class = "fa fa-${shuffled[i]}"></i></li>`;
     deck.insertAdjacentHTML('beforeend', template);
  };
};
//Card Clicking Functions
function openCard (card) {
  card.target.classList.add('open','show')
  opened.push(card.target)
}
function closeCard (card) {
  card.target.classList.remove('open','show')
  opened.pop(card.target)
}
//check card functionality
   function checkCard(){
     console.log('check')}
//Initialize game function
 function gameInit(){
   placeCards();
   cardItem.push(deck.getElementsByTagName('i'));

       if (opened.length < 2) {
     cardItem.forEach(function () {
     addEventListener('click', function (card) {

        openCard(card);
        setTimeout(function(){
        closeCard(card);
      }, 2300)
    })})}

    else if (opened.length >= 2) {
      removeEventListener('click', function (card) {

        openCard(card);
        setTimeout(function(){
        closeCard(card);
      }, 2300)
    }
      )
    }
   }


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


gameInit();
