/* zoom на карточках в блоке menu */
// let cardMenu = document.querySelectorAll(".cart-menu");
// const cardZoom = document.querySelectorAll(".img");

// for (let i = 0; i < cardMenu.length; i++) {
//   /* определяем устройство*/
//   const tochDevice =
//     "ontouchstart" in window || navigator.maxTouchPoints > 0 in cardMenu;
//   /*проверям какое устройство */
//   if (!tochDevice) {
//     cardMenu[i].addEventListener("mouseenter", () => {
//       console.log(1);
//       cardZoom[i].classList.toggle("zoom");
//     });
//     cardMenu[i].addEventListener("mouseleave", () => {
//       console.log(1);
//       cardZoom[i].classList.toggle("zoom");
//     });
//   }
// }

/**Бургер меню */
const btnBoorgerMenu = document.querySelector(".heder-btn__hover");
const navbarBoorgerMenu = document.querySelector(".navbar");
const navbarLinkMenu = document.querySelectorAll(".menu-link");

btnBoorgerMenu.addEventListener("click", () => {
  navbarBoorgerMenu.classList.toggle("navbar-ativ");
});
for (let i = 0; i < navbarLinkMenu.length; i++) {
  navbarLinkMenu[i].addEventListener("click", () => {
    console.log(1);
    navbarBoorgerMenu.classList.toggle("navbar-ativ");
  });
}
/**Переключение карточек в блоке menu */
const btnMenu = document.querySelectorAll(".btn-item");
const cartMenu = document.querySelectorAll(".contanier-menu");
const btnMenuImg = document.querySelectorAll(".menu-btn_img");
for (let i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", () => {
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
