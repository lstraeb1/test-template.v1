const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const container0 = document.querySelector('.container-0');
const contactUs = document.getElementById('contact-us-nav');
const classesNav = document.getElementById('classes-nav');
const interchangingWords = document.getElementById('interchanging-words');
const wordOptions = ["hard-working", "encouraging", "friendly", "curious", "family"];
let currentIndex = 0;

const changeLastWord = () => {
  interchangingWords.textContent = wordOptions[currentIndex];
  currentIndex = (currentIndex + 1) % wordOptions.length;
};

setInterval(changeLastWord, 1000);

const image = document.getElementById('about-lp-imgs');
const imageContainer = document.getElementById('img-container');

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  // Loop through each intersection entry
  entries.forEach(entry => {
    // Check if the image container is intersecting with the viewport
    if (entry.isIntersecting) {
      // Once the image container is in view, apply the opacity style to the image
      image.style.opacity = "1";
      image.style.transform = "translateY(0)";
      // Unobserve the image container to prevent further triggers
      observer.unobserve(entry.target);
    }
  });
}, {
  // Optionally, you can configure the root margin to trigger the intersection earlier or later
  // rootMargin: '0px', // You can adjust this value as needed
  threshold: 0.4 // Trigger when the image container intersects fully with the viewport
});

// Start observing the image container
observer.observe(imageContainer);