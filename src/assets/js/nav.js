// add classes for mobile navigation toggling
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

contactUs.addEventListener('click', () => {
	body.style.overflowY = 'auto';
	navToggleBtn.classList.add('collapsed');
	navbar.style.maxHeight = null;
	navbarCollapse.classList.remove('show');
});