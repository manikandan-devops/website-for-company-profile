// Hero slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Animate features on scroll
const features = document.querySelectorAll('.feature-item');
function checkFeatures() {
  const triggerBottom = window.innerHeight * 0.85;
  features.forEach(feature => {
    const featureTop = feature.getBoundingClientRect().top;
    if (featureTop < triggerBottom) {
      feature.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkFeatures);
checkFeatures();

// Navigation active link switching
const navLinks = document.querySelectorAll('nav ul li a');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach((section, index) => {
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});

// Contact form validation
function validateContactForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return false;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  alert('Thank you for your message, ' + name + '!');
  document.getElementById('contactForm').reset();
  return false;
}
