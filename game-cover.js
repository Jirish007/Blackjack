const progressBar = document.getElementById('progress-bar');
const link = './comps/blackjack.html'; // replace with your desired link
const gameCover = document.querySelector("#gameCover")
let progress = 0;




function Gamestart(){
  alert(
    `To play the game:
    You need to get a sum of 21 to win.
    If you get above 21 you lose.
    If you have less than 21 you have to keep playing until you either get 21 or higher.
    GOOD LUCK!

    `
)
}
const animateProgress = () => {
  
  progress += 1;
  progressBar.style.width = `${progress}%`;
  

  if (progress < 100) {
    requestAnimationFrame(animateProgress);
  } else {
    // redirect to link after 1 second
    setTimeout(() => {
      window.location.href = link;
    }, 1000);
  }
};

animateProgress();

