const initSlider = ($ele) => {
    const sliderContainer = document.querySelector(`${$ele}`);
    const slide = document.querySelectorAll(`${$ele} #slide .item`);
    const next = document.querySelector(`${$ele} .nextBtn`);
    const prev = document.querySelector(`${$ele} .prevBtn`);

    let currentSlide = 0;
    items[currentSlide].classList.add("activeSlide");

    sliderContainer.style.width = itemWidth + "px";
    slide.style.width = items.length * itemWidth + "px";
    slide.style.transform = "translateY(0px)";

    const toggleClass = (condition, elem, className) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
    };
};