
/**Бургер меню */
const btnBoorgerMenu = document.querySelector(".heder-btn__hover");
const navbarBoorgerMenu = document.querySelector(".navbar");
const navbarLinkMenu = document.querySelectorAll(".menu-link");
btnBoorgerMenu.addEventListener("click", () => {
  navbarBoorgerMenu.classList.toggle("navbar-ativ");
  btnBoorgerMenu.classList.toggle("heder-btn__hover_active");
});
for (let i = 0; i < navbarLinkMenu.length; i++) {
  navbarLinkMenu[i].addEventListener("click", () => {
    navbarBoorgerMenu.classList.toggle("navbar-ativ");
    btnBoorgerMenu.classList.toggle("heder-btn__hover_active");
  });
}


/**Слайдер в блоке Home */
window.addEventListener("resize", slideAdaptiv);
const slerDotActive = document.querySelectorAll(".sler-dot_active");
const sliderCart = document.querySelectorAll(".sleder-cart");
const sliderContener = document.querySelector(".Favourites-Coffee__contener");
const sliderBtnRight = document.querySelector(
  ".Favourites-Coffee__slider_right"
);
const sliderBtnLeft = document.querySelector(".Favourites-Coffee__slider_left");
const sliderline = document.querySelector(".slider-line");
const slierDot = document.querySelectorAll(".sler-dot");

sliderBtnRight.addEventListener("click", sliderRight);
sliderBtnLeft.addEventListener("click", sliderLeft);
let isPaused = false;
let time = 0;
let sliderCount = 0;
let sliderWidth;

let timer;
let timerB;
slerDotActive1(0);
slerInterval();

function slideAdaptiv() {
  sliderWidth = sliderline.offsetWidth;
  sliderline.style.width = sliderWidth * sliderCart.length + "px";
  sliderCart.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlider();
}
slideAdaptiv();
function sliderRight() {
  sliderCount++;
  if (sliderCount >= sliderCart.length) {
    sliderCount = 0;
  }
  slerDotActive.forEach((item) => (item.style.width = 0));
  clearInterval(timer);
  clearInterval(timerB);
  time = 0;
  slerInterval();
  rollSlider();
  slerDotActive1(sliderCount);
}
function sliderLeft() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderCart.length - 1;
  }
  slerDotActive.forEach((item) => (item.style.width = 0));

  clearInterval(timer);
  clearInterval(timerB);
  time = 0;
  slerInterval();
  rollSlider();
  slerDotActive1(sliderCount);
}

function rollSlider() {
  sliderContener.style.transform = `translateX(${
    -sliderCount * sliderWidth
  }px)`;
}

function slerDotActive1(index) {
  let timerA = 0;
  timer = setInterval(() => {
    if (!isPaused) {
      slerDotActive[index].style.width = timerA + "%";
      ++timerA;
    }
  }, 40);
}

function slerInterval() {
  timerB = setInterval(() => {
    if (!isPaused) {
      time++;

      if (time === 100) {
        sliderRight();
        time = 0;
      }
    }
  }, 40);
}

sliderCart.forEach((item) =>
  item.addEventListener("mouseenter", function () {
    if (!isPaused) {
      isPaused = true;
    }
  })
);

sliderCart.forEach((item) =>
  item.addEventListener("mouseleave", function () {
    if (isPaused) {
      isPaused = false;
    }
  })
);

/**События Touch */

sliderCart.forEach((item) =>
  item.addEventListener("touchstart", contenerTouchStart, false)
);
sliderCart.forEach((item) =>
  item.addEventListener("touchend", contenerTouchEnd, false)
);
sliderCart.forEach((item) =>
  item.addEventListener("touchmove", contenerTouchMove, false)
);

let x1 = null;
let y1 = null;

function contenerTouchEnd(event) {
  if (isPaused) {
    isPaused = false;
  }
}

function contenerTouchStart(event) {
  const firstTouch = event.touches[0];
  if (!isPaused) {
    isPaused = true;
  }
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}
function contenerTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xResult = x2 - x1;
  let yResult = y2 - y1;

  if (Math.abs(xResult) > Math.abs(yResult)) {
    if (xResult > 0) {
      sliderLeft();
    } else {
      sliderRight();
    }
  }
  x1 = null;
  y1 = null;
}


