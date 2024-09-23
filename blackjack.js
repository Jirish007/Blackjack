
    var sum = 0;
    let cards = [];
     
    
    //the player is currently alive
    let isAlive = false; 
    let hasBlackjack = false;
    let message = "";
    var sumD  = document.querySelector("#sumDisplay");
    var cardsEl = document.querySelector("#cards-el");
    var messageEl = document.querySelector("#message-el");
     //in default form the user does not have blackjack
    
    //conditionals for black jack game
    //booleans make our code much more robust
    var playerEl = document.querySelector("#player-el");
    let player = {
     name: "George",
     chips: 149
    }
    playerEl.textContent = player.name + ":" + player.chips + "$"
   
function getRandomCard() {
       var number =  Math.floor(Math.random()*13) + 1;
       
        if (number > 10) {
            return 10;
        }
        else if (number === 1) {
            return 11;
        }
        else {
            return number;
        }
    }
    
    function startGame() {
        isAlive = true; //you startin the game means that you are alive.
        let firstCard = getRandomCard()
       let secondCard  = getRandomCard()
        cards = [firstCard, secondCard]
sum = firstCard + secondCard;
        renderGame()
    }
    
function renderGame() {
    cardsEl.textContent ="cards:"
    if(sum < 21) {
        message = "DO YOU WANT TO DRAW A NEW  CARD";
    }
    else if(sum === 21) {
        message = "YOU HAVE BLACKJACK";
        hasBlackjack = true;
        //this makes it feel much more like a game
    }
    else{
        message = "BETTER LUCK NEXT TIME";
        isAlive = false;
    }
    messageEl.textContent = message;
  
sumD.textContent = "sum:"  + sum;
var i  = 0
for(i; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
}
};

function newCard() {
    if(isAlive === true && hasBlackjack === false) {
        var card = getRandomCard();
        sum += card;
     // we cant say sum = card because it wont update the number but only the 6
     cards.push(card);
      renderGame()
    }
  
}
/*
let hasSolvedChallenge = false;
let hasHintsLeft = false;
  if(hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
    }
function showSolution() {
  console.log("showing solution");
}
let likesDocumentaries =  true;
let likesStartups = false;
if(likesDocumentaries === true || likesStartups === true) {
    recommendMovies();
}
function recommendMovies() {
    console.log("Hey guys, check out this movie")
}
*/