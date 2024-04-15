const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const contactUs = document.getElementById('contact-us-nav');
const classesNav = document.getElementById('classes-nav');

navToggleBtn.addEventListener('click', () => {
	if (navToggleBtn.classList.contains('collapsed')) {
			body.style.overflowY = 'auto';
			navbar.style.maxHeight = null;
	} else {
			body.style.overflowY = 'hidden';
			navbar.style.maxHeight = '100vh';
	}
});

classesNav.addEventListener('click', () => {
	body.style.overflowY = 'auto';
	navToggleBtn.classList.add('collapsed');
	navbar.style.maxHeight = null;
	navbarCollapse.classList.remove('show');
});

const navSection = document.querySelector('.nav-section');
const section1 = document.querySelector('.section-1');
const isDesktopOrLaptop = window.matchMedia("(min-width: 1024px)").matches;

if (isDesktopOrLaptop) {
  const navObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        // If section-2 is 50% in view, fade out the navigation section
        navSection.style.opacity = "1";
        navSection.style.transition = "opacity 0.3s";
      } else {
        // Otherwise, fade in the navigation section
        navSection.style.opacity = "0";
        navSection.style.transition = "opacity 0.3s";
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of section-2 is in view
  });
  navObserver.observe(section1);
}