const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const contactUs = document.getElementById('contact-us-nav');
const classesNav = document.getElementById('classes-nav');
const container0 = document.querySelector('.container-0');
const imgContainer = document.getElementById('classes-img-container');
const classSkillsHeader = document.getElementById('class-skills-header');
const classSkillsSubtitle = document.getElementById('class-skills-subtitle');
const classSkillsButtons = document.getElementById('class-skills-buttons');
const classOption1 = document.getElementById('class-option-1');
const classOption2 = document.getElementById('class-option-2');
const classOption3 = document.getElementById('class-option-3');
const classOption4 = document.getElementById('class-option-4');
const classOption5 = document.getElementById('class-option-5');

const classOptionsObject = [
    {
        name: "Brazilian Jiu-Jitsu",
        image: "/assets/images/BJJ_Photo_homepage-removebg-preview.png",
        alt: "Grapplers image",
        header: "Develop Resilience and Precision",
        subtitle: "Enhance your problem-solving, adaptability, and physical conditioning.",
    },
    {
        name: "Judo",
        image: "/assets/images/judo-img-copy.png",
        alt: "Judo players image",
        header: "Fostering Strength and Technique",
        subtitle: "Master the art of adaptability, build inner strength, and hone precise techniques with Judo."
    },
    {
        name: "Youth Jiu-jitsu",
        image: "/assets/images/youth-bjj-photo-copy.png",
        alt: "Young grapplers image",
        header: "Empowering Young Minds",
        subtitle: "Unleash the potential of your child as they build resilience and learn essential life skills."
    },
    {
        name: "Striking",
        image: "/assets/images/striking-class-photo-copy.png",
        alt: "Boxers image",
        header: "Precision and Power Unleashed",
        subtitle: "Experience a journey of discipline, agility, and self-discovery, and unleash the fighter within you."
    },
    {
        name: "Beginner's Jiu-Jitsu",
        image: "/assets/images/beginners-bjj-photo.png",
        alt: "Beginner grapplers image",
        header: "Discover the Basics in Beginners Jiu-Jitsu",
        subtitle: "Learn the fundamentals and build a solid foundation as you delve into the art of grappling and self-defense."
    }

];

const classOptionSelect = (index) => {
    const selectedClass = classOptionsObject[index];

    imgContainer.innerHTML = `<img src="${selectedClass.image}" class="img-fluid" height="300px" alt="${selectedClass.alt}">`;
    classSkillsHeader.textContent = selectedClass.header;
    classSkillsSubtitle.textContent = selectedClass.subtitle;

    const allButtons = [classOption1, classOption2, classOption3, classOption4, classOption5];
    allButtons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';  
    });

    const selectedButton = allButtons[index];
    selectedButton.style.backgroundColor = '#e70303';
    selectedButton.style.color = 'white';
}

classOption1.addEventListener('click', () => classOptionSelect(0));
classOption2.addEventListener('click', () => classOptionSelect(1));
classOption3.addEventListener('click', () => classOptionSelect(2));
classOption4.addEventListener('click', () => classOptionSelect(3));
classOption5.addEventListener('click', () => classOptionSelect(4));

classOptionSelect(0);

const imageContainer = document.getElementById('images-container');
const image = document.getElementById('about-images');

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
  threshold: 0.25 // Trigger when the image container intersects fully with the viewport
});

// Start observing the image container
observer.observe(imageContainer);
