var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Slide show
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Toogle Side Navbar
const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector(".header-mobile");
hamburger.addEventListener("click", () => {
  menu.classList.remove(".hamburger-hidden");
  menu.classList.add(".hamburger-active");
  document.querySelector(".header-mobile").style.left = "0";
});

const arrowBack = document.querySelector(".fa-arrow-left");

arrowBack.addEventListener("click", () => {
  document.querySelector(".header-mobile").style.left = "-300px";
  menu.classList.remove(".hamburger-active");
  menu.classList.add(".hamburger-hidden");
});
