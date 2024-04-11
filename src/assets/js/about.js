const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const container0 = document.querySelector('.container-0');

const interchangingWords = document.getElementById('interchanging-words');
const wordOptions = ["hard-working", "encouraging", "friendly", "curious", "family"];
let currentIndex = 0;

const changeLastWord = () => {
  interchangingWords.textContent = wordOptions[currentIndex];
  currentIndex = (currentIndex + 1) % wordOptions.length;
};

setInterval(changeLastWord, 1000);

const aboutImages = document.getElementById('about-lp-imgs');

document.addEventListener('scroll', slideIn => aboutImages.style.opacity = "1")