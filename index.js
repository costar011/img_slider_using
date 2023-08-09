const initSlider = ($ele) => {
    const sliderContainer = document.querySelector(`#${$ele}`);
    const slide = document.querySelector(`#${$ele} #slide`);
    const items = document.querySelectorAll(`#${$ele} #slide .item`);
    const next = document.querySelector(`#${$ele} .nextBtn`);
    const prev = document.querySelector(`#${$ele} .prevBtn`);

    let currentSlide = 0;

    items[currentSlide].classList.add("activeSlide");
    let itemWidth = items[0].clientWidth;


    sliderContainer.style.width = itemWidth + "px";
    sliderContainer.style.width = items.length * itemWidth + "px";
    slide.style.transform = "translateY(0px)";

    const toggleClass = (condition, elem, className);
};