/**Popap  в блоке меню */
const cardMenu = document.querySelectorAll(".cart-menu");
import data from "./menu.json" assert { type: "json" };
const cartNumber = data;

function _popap(cartNumber, number) {
  const modal = document.createElement("div");
  modal.classList.add("popap");
  modal.insertAdjacentHTML(
    "afterbegin",
    ` 
     <div class="popap-vraper popap-vraper-active">
       <div class="popap-window">
         <div class="popap-img">
           <img src="${cartNumber[number].img}" alt="" />
         </div>
         <div class="popap-text">
           <div class="popap-title">
             <h3>${cartNumber[number].name}</h3>
             <span
               >${cartNumber[number].description}</span
             >
             <div class="poap-size_title">
               <h4>Size</h4>
             </div>
             <div class="popap-btn_size_wraper">
               <div class="popap-size-btn popap-size-btn-active">
                 <div class="popap-size popap-size-active">
                   <span>S</span>
                 </div>
                 ${cartNumber[number].sizes.s.size}
               </div>
               <div class="popap-size-btn">
                 <div class="popap-size">
                   <span>M</span>
                 </div>
                 ${cartNumber[number].sizes.m.size}
               </div>
               <div class="popap-size-btn">
                 <div class="popap-size">
                   <span>L</span>
                 </div>
                 ${cartNumber[number].sizes.l.size}
               </div>
             </div>
             <div class="poap-Additives_title">
               <h4>Additives</h4>
             </div>
               <div class="popap-btn_Additives_wraper">
                 <div class="popap-Additives-btn">
                   <div class="popap-Additives">
                     <span>1</span>
                   </div>
                   ${cartNumber[number].additives[0].name}
                 </div>
                 <div class="popap-Additives-btn">
                   <div class="popap-Additives">
                     <span>2</span>
                   </div>
                   ${cartNumber[number].additives[1].name}
                 </div>
                 <div class="popap-Additives-btn">
                   <div class="popap-Additives">
                     <span>3</span>
                   </div>
                   ${cartNumber[number].additives[2].name}
                 </div>
               </div>
              <div class="popap-total">
               <span>Total:</span>
               <span>$<span class="popap-prise">${cartNumber[number].price}</span></span>
             </div>
             <div class="popap-info">
               <span
                 ><img src="./img/Menu_img/info-empty.svg" alt="info"
               /></span>
               <span
                 >The cost is not final. Download our mobile app to see the
                 final price and place your order. Earn loyalty points and
                 enjoy your favorite coffee with up to 20% discount.</span
               >
             </div>
             <div class="popap-close">
               <span>Close</span>
             </div>
           </div>
         </div>
       </div>
     </div>
     `
  );
  document.body.appendChild(modal);
  return modal;
}

const b = document.querySelector(".body");

for (let i = 0; i < cardMenu.length; i++) {
  cardMenu[i].addEventListener("click", (e) => {
    _popap(cartNumber, i);
    const sizePrice = [
      cartNumber[i].sizes.s.price,
      cartNumber[i].sizes.m.price,
      cartNumber[i].sizes.l.price,
    ];
    popapAdditivesBtnActive();
    popapSizeBtnActive(cartNumber[i].price, sizePrice);
    b.classList.add("popap-active_body");

    document.querySelector(".popap-window").addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.querySelector(".popap-vraper").addEventListener("click", (e) => {
      b.removeChild(b.lastChild);
      b.classList.remove("popap-active_body");
    });
    document.querySelector(".popap-close").addEventListener("click", (e) => {
      b.removeChild(b.lastChild);
      b.classList.remove("popap-active_body");
    });
  });
}

function popapSizeBtnActive(price, sizePrice) {
  const popapSizeBTN = document.querySelectorAll(".popap-size-btn");
  const popapSize = document.querySelectorAll(".popap-size");
  const popapAdditives = document.querySelectorAll(".popap-Additives");
  const popapAdditivesBTN = document.querySelectorAll(".popap-Additives-btn");
  let popapPrise;
  for (let i = 0; i < popapSizeBTN.length; i++) {
    popapSizeBTN[i].addEventListener("click", () => {
      for (let i = 0; i < popapSizeBTN.length; i++) {
        if (popapSizeBTN[i].classList.contains("popap-size-btn-active")) {
          popapPrise = +price - +sizePrice[i];
        }
        popapSizeBTN[i].classList.remove("popap-size-btn-active");
        popapSize[i].classList.remove("popap-size-active");
        popapAdditivesBTN[i].classList.remove("popap-Additives-btn-active");
        popapAdditives[i].classList.remove("popap-Additives-active");
      }
      popapSizeBTN[i].classList.toggle("popap-size-btn-active");
      popapSize[i].classList.toggle("popap-size-active");
      if (popapSizeBTN[i].classList.contains("popap-size-btn-active")) {
        popapPrise = +price + +sizePrice[i];
      }
      document.querySelector(".popap-prise").innerHTML =
        Number(popapPrise).toFixed(2);
    });
  }
  console.log(popapPrise);
}
function popapAdditivesBtnActive() {
  const popapAdditivesBTN = document.querySelectorAll(".popap-Additives-btn");
  const popapAdditives = document.querySelectorAll(".popap-Additives");
  let AdditivesPrice;
  for (let i = 0; i < popapAdditivesBTN.length; i++) {
    popapAdditivesBTN[i].addEventListener("click", () => {
      if (popapAdditives[i].classList.contains("popap-Additives-active")) {
        let priseAdd = document.querySelector(".popap-prise").innerHTML;
        popapAdditivesBTN[i].classList.remove("popap-Additives-btn-active");
        popapAdditives[i].classList.remove("popap-Additives-active");
        priseAdd = +priseAdd - 0.5;
        document.querySelector(".popap-prise").innerHTML =
          Number(priseAdd).toFixed(2);
      } else {
        let priseAdd = document.querySelector(".popap-prise").innerHTML;
        popapAdditivesBTN[i].classList.add("popap-Additives-btn-active");
        popapAdditives[i].classList.add("popap-Additives-active");
        priseAdd = +priseAdd + 0.5;
        document.querySelector(".popap-prise").innerHTML =
          Number(priseAdd).toFixed(2);
      }
    });
  }
}

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

/**Переключение карточек в блоке menu */
const btnMenu = document.querySelectorAll(".btn-item");
const cartMenu = document.querySelectorAll(".contanier-menu");
const btnMenuImg = document.querySelectorAll(".menu-btn_img");
for (let i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", () => {
    console.log(btnMenu[i]);
    for (let i = 0; i < cartMenu.length; i++) {
      cartMenu[i].classList.remove("contanier-menu_activ");
      btnMenu[i].classList.remove("btn-item-active");
      btnMenuImg[i].classList.remove("menu-btn_img_active");
    }

    cartMenu[i].classList.toggle("contanier-menu_activ");
    btnMenu[i].classList.toggle("btn-item-active");
    btnMenuImg[i].classList.toggle("menu-btn_img_active");
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
      // console.log (timerA)
    }
  }, 40);
}

function slerInterval() {
  timerB = setInterval(() => {
    if (!isPaused) {
      sliderRight();
    }
  }, 4000);
}
sliderCart.forEach((item) =>
  item.addEventListener("mouseenter", function () {
    if (!isPaused) {
      isPaused = true;
      console.log("true");
    }
  })
);

sliderCart.forEach((item) =>
  item.addEventListener("mouseleave", function () {
    if (isPaused) {
      isPaused = false;
      console.log("false");
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
