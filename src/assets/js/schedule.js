const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const contactUs = document.getElementById('contact-us-nav');
const classesNav = document.getElementById('classes-nav');
const container0 = document.querySelector('.container-0');

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

// toggle between weekday and weekend

const toggleBtn1 = document.getElementById('toggle-button-1');
const toggleBtn2 = document.getElementById('toggle-button-2');
const calendarContent = document.getElementById('calendar-container');

const scheduleSelector = (event) => {
	if (event.target === toggleBtn1) {
		calendarContent.style.transform = "translate(-50%)";
	} else if (event.target === toggleBtn2) {
		calendarContent.style.transform = "translate(0)";
	}
};

toggleBtn1.addEventListener('click', scheduleSelector);
toggleBtn2.addEventListener('click', scheduleSelector);

// toggle between days on mobile view

const mobileToggleLeft = document.querySelector('.mobile-btn-left');
const mobileToggleRight = document.querySelector('.mobile-btn-right');

let currentTranslateX = 0;
const maxTranslateX = -600; 

function updateButtonStyles() {
	if (currentTranslateX === 0) {
			mobileToggleLeft.classList.add('inactive');
	} else {
			mobileToggleLeft.classList.remove('inactive');
	}
}

function scheduleSelectorMobile(event) {
    const targetButton = event.target;

    if (currentTranslateX === 0 && targetButton.classList.contains('mobile-btn-left')) {
      return; 
    }

    if (currentTranslateX === maxTranslateX && targetButton.classList.contains('mobile-btn-right')) {
        return; 
    }

    if (targetButton.classList.contains('mobile-btn-right')) {
        currentTranslateX -= 100; 
    } else {
        currentTranslateX += 100;
    }

    calendarContent.style.transform = `translateX(${currentTranslateX}vw)`;
}

mobileToggleLeft.addEventListener('click', scheduleSelectorMobile);
mobileToggleRight.addEventListener('click', scheduleSelectorMobile);


// place red dot next to day of the week (calendar-header-container) today is

const calendarHeader = document.getElementById('calendar-header-container');
const date = new Date();
const currentDay = date.getDay();
const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function redCircle() {
	const targetColumnId = daysOfWeek[currentDay];
	const targetColumn = document.getElementById(targetColumnId);

	if (targetColumn) {
		const redCircleElement = document.createElement('i');
    redCircleElement.classList.add('fa-solid', 'fa-circle', 'fa-xl', 'red-circle');

		const headerContainer = targetColumn.querySelector('.calendar-header-container');
    if (headerContainer) {
      headerContainer.appendChild(redCircleElement);
		}
	}
};

redCircle();

// class filter button logic

const filterBtn = document.getElementById('filter-btn');
const calendarBlocks = document.getElementsByClassName('calendar-block');
const filterOption0 = document.getElementById('all-filter-btn');
const filterOption1 = document.getElementById('bjj-filter-btn');
const filterOption2 = document.getElementById('beg-jj-filter-btn');
const filterOption3 = document.getElementById('youth-jj-filter-btn');
const filterOption4 = document.getElementById('striking-filter-btn');
const filterOption5 = document.getElementById('judo-filter-btn');

function filterClasses(filterOptionButton) {
	if (filterOptionButton.id === 'all-filter-btn') {
		// If 'all' is selected, show all blocks
		for (let i = 0; i < calendarBlocks.length; i++) {
			calendarBlocks[i].style.display = "block";
		}
	} else {
		// For other options, filter based on class
		for (let i = 0; i < calendarBlocks.length; i++) {
			const calendarBlock = calendarBlocks[i];
			const filterClass = filterOptionButton.id.replace('-filter-btn', '');

			if (!calendarBlock.classList.contains(filterClass)) {
					calendarBlock.style.display = "none";
			} else {
					calendarBlock.style.display = "block";
			}
		}
}
// Update the text content of the filter button to the text content of the selected filter option
	filterBtn.textContent = filterOptionButton.textContent;
};

filterOption0.addEventListener('click', function () {
	filterClasses(filterOption0);
});

filterOption1.addEventListener('click', function () {
	filterClasses(filterOption1);
});

filterOption2.addEventListener('click', function () {
	filterClasses(filterOption2);
});

filterOption3.addEventListener('click', function () {
	filterClasses(filterOption3);
});

filterOption4.addEventListener('click', function () {
	filterClasses(filterOption4);
});

filterOption5.addEventListener('click', function () {
	filterClasses(filterOption5);
});