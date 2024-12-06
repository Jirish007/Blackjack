const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const link = './comps/blackjack.html'; // replace with your desired link

let progress = 0;

const animateProgress = () => {
  progress += 1;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;

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

