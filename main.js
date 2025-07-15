const words = ["Willkommen", "Welcome", "Добредојде"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1500;

function type() {
  const typewriter = document.getElementById("typewriter-text");
  if (wordIndex >= words.length) {
    wordIndex = 0;
  }
  
  currentWord = words[wordIndex];

  if(!isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
      return;
    }
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;
    }
  }

  setTimeout(
    type,
    isDeleting ? erasingSpeed : typingSpeed
    );
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});

function updateDateTime() {
  const now = new Date();
  
  const currentDateTime = now.toLocaleString('en-GB', {
    timeZone: 'Europe/Vienna',
  });

  const cleaned = currentDateTime.replace(",", "");
  document.querySelector('#time').textContent = cleaned + ' in vienna';
}

setInterval(updateDateTime, 1000);

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  updateDateTime();
});
