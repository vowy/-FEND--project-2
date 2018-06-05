//Card list
const cards = ['diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb', 'diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb'];

   const deck = document.querySelector('.deck');
   const itemCard = deck.querySelector('li.card');
   const scorePanel = document.querySelector('.score-panel');
   const restart = scorePanel.querySelector('.restart');
   const moves = scorePanel.querySelector('.moves');
   const modal = document.querySelector('.modal');
   const stars = scorePanel.querySelector('.stars');
   const starsLi = stars.querySelectorAll('.stars Li');
   let opened = [];
   let matchVar = 0;
   let movesVar = 0;
   let starsVar = 5;

// Score-panel restart (reload) function
restart.addEventListener('click', function restartFunc (){
  location.reload(true);
});

//Star scoring system
const starTemp = `<li class="stars Li"><i class = "fa fa-star"></i></li>`.repeat(starsVar)
function makeStars () {
stars.insertAdjacentHTML('beforeend', starTemp);
}
if (movesVar < 19) {
setInterval (function(){
  stars.removeChild(stars.lastElementChild);
},30000);
};
if (movesVar > 18) {
setInterval (function(){
  starsVar--;
  stars.removeChild(stars.lastElementChild);
},20000);
};
if (movesVar > 25) {
setInterval (function(){
  starsVar--;
  stars.removeChild(stars.lastElementChild);
},10000);
};
if (movesVar > 30) {
setInterval (function(){
  starsVar--;
  stars.removeChild(stars.lastElementChild);
},1500);
};
if (starsVar < 0) {
 let starsVar = 0;
}
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

//Function on Win
function youWin(){
  deck.style.display = "none";
  scorePanel.style.display = "none";
if (movesVar === 16) {
  var modalTemp = `<h1>PERFECT SCORE!<br>B E N N Y</h1> `.repeat(29)
}
if (min >= 0) {
  var modalTemp = `<br><h3>You completed with a score of ${starsVar} out of 5 stars!<br>
  You did it in ${movesVar} moves and ${sec} seconds!</h3><br>`;

}
if (min === 1) {
  var modalTemp = `<br><h3>You completed with a score of ${starsVar} out of 5 stars!<br>
  You did it in ${movesVar} moves and finished at ${min} minute and ${sec} seconds!</h3><br>`;

}else{
  var modalTemp = `<br><h3>You completed with a score of ${starsVar} out of 5 stars!<br>
  You did it in ${movesVar} moves and finished at ${min} minutes and ${sec} seconds!</h3><br>`;
}

  modal.insertAdjacentHTML('beforeend', modalTemp);
  modal.className=('modalshow');
  stopTimer();
}

//timer
// Timer functions
let sec = 0;
let min = 0;
let timer;

function startTimer() {
	timer = setInterval(insertTime, 1000);
}

function stopTimer() {
	clearInterval(timer);
	sec = 0;
	min = 0;
}

function insertTime() {
	sec++;

	if (sec < 10) {
		sec = `0${sec}`;
	}

	if (sec >= 60) {
		min++;
		sec = "00";
	}

	// display time
	document.querySelector('.timer').innerHTML = "0" + min + ":" + sec;
}
//Card Clicking Functions
function openCard (card) {
  card.target.classList.add('open','show');
  opened.push(card.target);
}

function closeCard (card) {
  opened[1].classList.remove('open','show','unmatch');
  opened[0].classList.remove('open','show','unmatch');
  opened.splice(0,2);

}

//check card functionality
   function checkCard(card)
   {
     if (opened.length > 1 && opened[0].firstChild.className === opened[1].firstChild.className && !(opened[0] === opened[1])) {
       matchCards(card);
       movesVar ++;
       moves.innerText = movesVar;
     } else {
       movesVar ++;
       moves.innerText = movesVar;
       unmatchCards(card);
       setTimeout(function(){
       closeCard(card);
     }, 600)
     }
   };

//Matching cards functionality
 function matchCards (card){
opened[0].classList.toggle('match');
opened[1].classList.toggle('match');
matchVar++;
opened.splice(0,2);



 };

 function unmatchCards (card) {
opened[0].classList.toggle('unmatch');
opened[1].classList.toggle('unmatch');
 }

//Initialize game function
 function gameInit(){
   startTimer();
   placeCards();
   makeStars();
//Clicking functions
deck.addEventListener('click', function (card) {

        if (opened.length == 1 && card.target.classList.contains('card')) {
           openCard(card);
           checkCard(card);
        }
        else if (opened.length > 1) {

        } else if (opened.length == 0 && card.target.classList.contains('card')) {
          openCard(card);
         }
          if (matchVar === 8) {
              youWin();
        }
      }
    )
  };



gameInit();
