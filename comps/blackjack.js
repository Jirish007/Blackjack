
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
 
    cardsEl.textContent =""
    if(sum < 21) {
        message = "DO YOU WANT TO DRAW A NEW  CARD?";

       

    }
    else if(sum === 21) {
        message = "YOU HAVE BLACKJACK";
     
        hasBlackjack = true;
        showBlackjackVideo();

        //this makes it feel much more like a game
    }
    else{
        message = "BETTER LUCK NEXT TIME";
        isAlive = false;
        showBlackjackVideoLose()
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








function showBlackjackVideo() {
    const video = document.getElementById('blackjack-video');
    video.style.display = 'block';
    video.play();
  
    // redirect back to game after video finishes playing
    video.onended = () => {
      video.style.display = 'none';
      startGame(); // restart the game
    };
  }
  
  function showBlackjackVideoLose() {
    const video = document.getElementById('blackjack-lose');
    video.style.display = 'block';
    video.play();
  
    // redirect back to game after video finishes playing
    video.onended = () => {
      video.style.display = 'none';
      startGame(); // restart the game
    };
  }
  


//blackjack

var $progress = $('.progress');
var $progressBar = $('.progress-bar');
var $alert = $('.alert');

setTimeout(function() {
    $progressBar.css('width', '10%');
    setTimeout(function() {
        $progressBar.css('width', '30%');
        setTimeout(function() {
            $progressBar.css('width', '100%');
            setTimeout(function() {
                $progress.css('display', 'none');
                $alert.css('display', 'block');
            }, 500); // WAIT 5 milliseconds
        }, 2000); // WAIT 2 seconds
    }, 1000); // WAIT 1 seconds
}, 1000); // WAIT 1 second
