
    var sum = 0;
    let cards = [];
     
    
    //the player is currently alive
    let isAlive = false; 
    let hasBlackjack = false;
    let message = "";
    var sumD  = document.querySelector("#sumDisplay");
    var cardsEl = document.querySelector("#cards-el");
    var messageEl = document.querySelector("#message-el");
    const gameBody = document.querySelector('#gameBody')
    var start = document.querySelector('#start')
    var repeat = document.querySelector(".repeat")
     //in default form the user does not have blackjack
    
    //conditionals for black jack game
    //booleans make our code much more robust
    var playerEl = document.querySelector("#player-el");
    
   
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
      if(start){
       start.style.display = "none"
      }
    }
    
function renderGame() {
 
    cardsEl.textContent =""
    if(sum < 21) {
        message = "DO YOU WANT TO DRAW A NEW  CARD?";

       

    }
    else if(sum === 21) {
        message = "YOU HAVE BLACKJACK";
     
        hasBlackjack = true;
       repeat.style.display ="inline-block"

        //this makes it feel much more like a game
    }
    else{
        message = "BETTER LUCK NEXT TIME";
        isAlive = false;
    
     repeat.style.display ="inline-block"
    
    }
    messageEl.textContent = message;
  
sumD.textContent = "sum:"  + sum;
var i  = 0;
for(i; i < cards.length; i++){
cardsEl.innerHTML += `
<span id="card${cards[i]}">
${cards[i]+ " "}
</span>
`
;
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
function Repeat(){

window.location.href = "blackjack.html"
}