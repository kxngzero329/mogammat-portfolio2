

// Add typing effect
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const texts = ['WEB DEVELOPER', 'WEB DESIGNER', 'JUNIOR FRONT-END DEVELOPER'];
let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
  if (currentCharIndex < texts[currentTextIndex].length) {
    typedText.textContent += texts[currentTextIndex][currentCharIndex];
    currentCharIndex++;
    setTimeout(typeText, 100); 
  } else {
    setTimeout(eraseText, 2000); 
  }
}

// Erase typing effect
function eraseText() {
  if (currentCharIndex > 0) {
    typedText.textContent = typedText.textContent.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(eraseText, 50); 
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    currentCharIndex = 0;
    setTimeout(typeText, 500);
  }
}

typeText();



// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
  stickyNav();
};

function stickyNav() {
  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the banner height (100vh)
  var bannerHeight = window.innerHeight;

  // Add the sticky class to the navbar when you scroll past the banner
  if (window.pageYOffset > bannerHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}







// Animate progress bars
const progressBars = document.querySelectorAll('.progress');

progressBars.forEach((bar, index) => {
  const width = [100, 96, 94, 87, 84, 90, 91][index];
  const interval = setInterval(() => {
    const currentWidth = parseInt(bar.style.width);
    if (currentWidth < width) {
      bar.style.width = `${currentWidth + 1}%`;
    } else {
      clearInterval(interval);
    }
  }, 10);
});






