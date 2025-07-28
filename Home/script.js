const slides = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + slides.length) % slides.length;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function autoSlide() {
  setInterval(() => {
    changeSlide(1);
  }, 4000); // change every 4 seconds
}

showSlide(currentIndex);
autoSlide(); // ✅ call this to start sliding automatically
