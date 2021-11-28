let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slider__slide');
  const dots = document.getElementsByClassName('slider__dots-item');

  if (n > slides.length) {
    slideIndex = 1
  } else if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}