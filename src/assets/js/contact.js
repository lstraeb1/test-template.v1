const contactUs = document.getElementById('contact-us-nav');
const classesNav = document.getElementById('classes-nav');

document.forms['contact'].addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var inputs = this.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
  var isValid = true;
  
  inputs.forEach(function(input) {
    if (!input.value.trim()) { 
      isValid = false;
    }
  });
  
  if (!isValid) {
    alert('Please fill out all fields before submitting.');
  } else {
    this.submit();
  }
});