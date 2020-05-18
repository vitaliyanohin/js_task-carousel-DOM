'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelector('.carousel__dots-wrap');
const carouseltem = document.querySelector('.carousel__item');
const cardWidth = carouseltem.offsetWidth;
const maxAvailableScrollWidth = carousel.scrollWidth - cardWidth;
let dotCount = 0;
const maxDotsIndex = dots.children.length - 1;

nextButton.addEventListener('click', () => {
  if (carousel.scrollLeft % cardWidth !== 0) {
    return;
  }

  if ((carousel.scrollLeft + cardWidth) <= maxAvailableScrollWidth) {
    carousel.scrollLeft += cardWidth;
    dots.children[dotCount].classList.remove('carousel__dot_active');
    dots.children[++dotCount].classList.add('carousel__dot_active');
  }

  if ((carousel.scrollLeft + cardWidth) > maxAvailableScrollWidth) {
    carousel.scrollLeft = 0;
    dots.children[dotCount].classList.remove('carousel__dot_active');
    dotCount = 0;
    dots.children[dotCount].classList.add('carousel__dot_active');
  }
});

prevButton.addEventListener('click', () => {
  if (carousel.scrollLeft % cardWidth !== 0) {
    return;
  }

  if ((carousel.scrollLeft - cardWidth) >= 0) {
    carousel.scrollLeft -= cardWidth;
    dots.children[dotCount].classList.remove('carousel__dot_active');
    dots.children[--dotCount].classList.add('carousel__dot_active');
  }

  if ((carousel.scrollLeft - cardWidth) < 0) {
    carousel.scrollLeft = maxAvailableScrollWidth;
    dots.children[dotCount].classList.remove('carousel__dot_active');
    dotCount = maxDotsIndex;
    dots.children[dotCount].classList.add('carousel__dot_active');
  }
});
