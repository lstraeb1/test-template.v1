const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const container0 = document.querySelector('.container-0');
const priceSquare2 = document.getElementById('price-square-2');
const periodSelector1 = document.getElementById('selector-1');
const periodSelector2 = document.getElementById('selector-2');
const periodSelector3 = document.getElementById('selector-3');
const priceHeader1 = document.getElementById('plan-header-1');
const priceSubtitle1 = document.getElementById('plan-subtitle-1');
const price1 = document.getElementById('plan-price-1');
const sticker1 = document.getElementById('plan-sticker-1');
const included1 = document.getElementById('included-container-1');
const priceHeader2 = document.getElementById('plan-header-2');
const priceSubtitle2 = document.getElementById('plan-subtitle-2');
const price2 = document.getElementById('plan-price-2');
const sticker2 = document.getElementById('plan-sticker-2');
const included2 = document.getElementById('included-container-2');
const backgroundRed = document.getElementById('background-red');

// allow scrolling on navbar when open on mobile devices but prevent scrolling on rest of body

navToggleBtn.addEventListener('click', () => {
	if (navToggleBtn.classList.contains('collapsed')) {
			body.style.overflowY = 'auto';
			navbar.style.maxHeight = null;
	} else {
			body.style.overflowY = 'hidden';
			navbar.style.maxHeight = '100vh';
	}
});

const priceOptionObject = [
	{
		name: "Monthly Adult",
		header: "Adult Jiu-Jitsu",
		subtitle: "Mastering self-defense and discipline through adult Jiu-Jitsu training.",
		price: "$159",
		sticker: "",
		includes: `
			<ul>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Jiu-Jitsu</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Striking</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Judo</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Open Mat</li>
			</ul>
		`
	},

	{
		name: "Monthly Youth",
		header: "Youth Jiu-Jitsu",
		subtitle: "Nurturing confidence and resilience in youth through the art of Jiu-Jitsu.",
		price: "$149",
		sticker: "",
		includes: `
			<ul>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Youth Jiu-Jitsu</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Youth Judo</li>
			</ul>
		`
	},

	{
		name: "6 Month Adult",
		header: "Adult Jiu-Jitsu",
		subtitle: "Mastering self-defense and discipline through adult Jiu-Jitsu training.",
		price: "$149",
		sticker: "$849 billed semi-annually",
		includes: `
			<ul>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Jiu-Jitsu</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Striking</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Judo</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Open Mat</li>
				<li><i class="fa-regular fa-circle-check"></i>1 Free Private Lesson/Month</li>
			</ul>
		`
	},

	{
		name: "6 Month Youth",
		header: "Youth Jiu-Jitsu",
		subtitle: "Nurturing confidence and resilience in youth through the art of Jiu-Jitsu.",
		price: "$135",
		sticker: "$810 billed semi-annually",
		includes: `
			<ul>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Youth Jiu-Jitsu</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Youth Judo</li>
			</ul>
		`
	},

	{
		name: "1 Year Adult",
		header: "Adult Jiu-Jitsu",
		subtitle: "Mastering self-defense and discipline through adult Jiu-Jitsu training.",
		price: "$135",
		sticker: "$1,620 billed annually",
		includes: `
			<ul>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Jiu-Jitsu</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Striking</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Judo</li>
				<li><i class="fa-regular fa-circle-check"></i>Unlimited Open Mat</li>
				<li><i class="fa-regular fa-circle-check"></i>2 Free Private Lessons/Month</li>
			</ul>
		`
	}
];

function priceOptionSelect(identifier) {
	periodSelector1.style.color = '';
	periodSelector2.style.color = '';
	periodSelector3.style.color = '';

	if (identifier == 'periodSelector1') {
		priceHeader1.textContent = priceOptionObject[0].header;
		priceSubtitle1.textContent = priceOptionObject[0].subtitle;
		price1.innerHTML= `<h1>${priceOptionObject[0].price}<span id="per-month">/Month</span></h1>`;
		sticker1.textContent = priceOptionObject[0].sticker;
		included1.innerHTML = priceOptionObject[0].includes;

		priceHeader2.textContent = priceOptionObject[1].header;
		priceSubtitle2.textContent = priceOptionObject[1].subtitle;
		price2.innerHTML= `<h1>${priceOptionObject[1].price}<span id="per-month">/Month</span></h1>`;
		sticker2.innerHTML = priceOptionObject[1].sticker;
		included2.innerHTML = priceOptionObject[1].includes;

		priceSquare2.style.display = "block";
		periodSelector1.style.color = "white";

		if (window.innerWidth < 576) {
			backgroundRed.style.right = "339px";
		} else {
			backgroundRed.style.right = "465px";
		};

	} else if (identifier == 'periodSelector2') {
		priceHeader1.textContent = priceOptionObject[2].header;
		priceSubtitle1.textContent = priceOptionObject[2].subtitle;
		price1.innerHTML= `<h1>${priceOptionObject[2].price}<span id="per-month">/Month</span></h1>`;
		sticker1.textContent = priceOptionObject[2].sticker;
		included1.innerHTML = priceOptionObject[2].includes;


		priceHeader2.textContent = priceOptionObject[3].header;
		priceSubtitle2.textContent = priceOptionObject[3].subtitle;
		price2.innerHTML= `<h1>${priceOptionObject[3].price}<span id="per-month">/Month</span></h1>`;
		sticker2.textContent = priceOptionObject[3].sticker;
		included2.innerHTML = priceOptionObject[3].includes;

		priceSquare2.style.display = "block";
		periodSelector2.style.color = "white";

		if (window.innerWidth < 576) {
			backgroundRed.style.right = "226px";
		} else {
			backgroundRed.style.right = "312px";
		};
	}

	else if (identifier == 'periodSelector3') {
		setTimeout(function() {
			priceHeader1.textContent = priceOptionObject[4].header;
			priceSubtitle1.textContent = priceOptionObject[4].subtitle;
			price1.innerHTML= `<h1>${priceOptionObject[4].price}<span id="per-month">/Month</span></h1>`;
			sticker1.textContent = priceOptionObject[4].sticker;
			priceSquare2.style.display = "none";
			included1.innerHTML = priceOptionObject[4].includes;
		}, 200);

		periodSelector3.style.color = "white";

		if (window.innerWidth < 576) {
			backgroundRed.style.right = "113px";
		} else {
			backgroundRed.style.right = "155px";
		};
	}
}

periodSelector1.addEventListener('click', function() {
	priceOptionSelect('periodSelector1');
});

periodSelector2.addEventListener('click', function() {
	priceOptionSelect('periodSelector2');
});

periodSelector3.addEventListener('click', function() {
	priceOptionSelect('periodSelector3');
});

periodSelector1.click();

const question1 = document.getElementById('question-1');
const answer1 = document.getElementById('answer-1');
const extendButton1 = document.getElementById('extend-button-1');
const chevron1 = document.getElementById('chevron-1');

const question2 = document.getElementById('question-2');
const answer2 = document.getElementById('answer-2');
const extendButton2 = document.getElementById('extend-button-2');
const chevron2 = document.getElementById('chevron-2');

const question3 = document.getElementById('question-3');
const answer3 = document.getElementById('answer-3');
const extendButton3 = document.getElementById('extend-button-3');
const chevron3 = document.getElementById('chevron-3');

const question4 = document.getElementById('question-4');
const answer4 = document.getElementById('answer-4');
const extendButton4 = document.getElementById('extend-button-4');
const chevron4 = document.getElementById('chevron-4');

const question5 = document.getElementById('question-5');
const answer5 = document.getElementById('answer-5');
const extendButton5 = document.getElementById('extend-button-5');
const chevron5 = document.getElementById('chevron-5');

function extendFaq1() {
	if (answer1.innerHTML.trim() !== "") {
		answer1.innerHTML = "";
		question1.style.fontWeight = "normal"; 
		chevron1.classList.remove('fa-chevron-up');
		chevron1.classList.add('fa-chevron-down');
	} else {
		answer1.innerHTML = `<p>Save up to $25/month and get 2 free private lessons/month by choosing an annual plan. Our annual plans are great 
		for customers who live locally and can commit to the extended timeframe. Join the family at Sub-G on your path to martial arts mastery</p>`;
		question1.style.fontWeight = "bold";
		chevron1.classList.remove('fa-chevron-down');
		chevron1.classList.add('fa-chevron-up');
	}
};

function extendFaq2() {
	if (answer2.innerHTML.trim() !== "") {
		answer2.innerHTML = "";
		question2.style.fontWeight = "normal"; 
		chevron2.classList.remove('fa-chevron-up');
		chevron2.classList.add('fa-chevron-down');
	} else {
		answer2.innerHTML = `<p>At Sub-G we welcome individuals of all experience levels to join our community. Whether you're a complete beginner or have previous martial 
		arts experience, our classes are designed to accommodate everyone. The relaxed environment of Sub-G coupled with its qualified instructors make it a great place to train for everyone.</p>`;
		question2.style.fontWeight = "bold";
		chevron2.classList.remove('fa-chevron-down');
		chevron2.classList.add('fa-chevron-up');
	}
};

function extendFaq3() {
	if (answer3.innerHTML.trim() !== "") {
		answer3.innerHTML = "";
		question3.style.fontWeight = "normal"; 
		chevron3.classList.remove('fa-chevron-up');
		chevron3.classList.add('fa-chevron-down');
	} else {
		answer3.innerHTML = `<p>At Sub-G, the safety and well-being of our young students are our top priorities. We implement rigorous safety protocols and age-appropriate 
		training methods to ensure a positive and secure learning experience for children of all ages. Additionally, we maintain a clean and padded training area to minimize the risk of injury.</p>`;
		question3.style.fontWeight = "bold";
		chevron3.classList.remove('fa-chevron-down');
		chevron3.classList.add('fa-chevron-up');
	}
};

function extendFaq4() {
	if (answer4.innerHTML.trim() !== "") {
		answer4.innerHTML = "";
		question4.style.fontWeight = "normal"; 
		chevron4.classList.remove('fa-chevron-up');
		chevron4.classList.add('fa-chevron-down');
	} else {
		answer4.innerHTML = `<p>training in martial arts can provide students with practical self-defense skills, mental discipline, and improved confidence. Through disciplined practice, students develop mental resilience, 
		concentration, and self-control. Our supportive community fosters positive attitudes, respect, and camaraderie among students.</p>`;
		question4.style.fontWeight = "bold";
		chevron4.classList.remove('fa-chevron-down');
		chevron4.classList.add('fa-chevron-up');
	}
};

function extendFaq5() {
	if (answer5.innerHTML.trim() !== "") {
		answer5.innerHTML = "";
		question5.style.fontWeight = "normal"; 
		chevron5.classList.remove('fa-chevron-up');
		chevron5.classList.add('fa-chevron-down');
	} else {
		answer5.innerHTML = `<p>While some of our classes involve training in a traditional BJJ gi, it is not required. We encourage students to wear atheletic clothing
		that they can be comfortable and agile in. We recommend trying out one of our free classes before purchasing gis, rashguards, mouthguards, or any other equipment.</p>`;
		question5.style.fontWeight = "bold";
		chevron5.classList.remove('fa-chevron-down');
		chevron5.classList.add('fa-chevron-up');
	}
};

extendButton1.addEventListener('click', extendFaq1);
extendButton2.addEventListener('click', extendFaq2);
extendButton3.addEventListener('click', extendFaq3);
extendButton4.addEventListener('click', extendFaq4);
extendButton5.addEventListener('click', extendFaq5);