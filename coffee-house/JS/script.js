// const contanierMenu = document.querySelector(".contanier-menu");

// const arrMenu = [
//   { Image: "Image1", title: "title1", text: "text1", price: "price1" },
//   { Image: "Image2", title: "title2", text: "text2", price: "price2" },
// ];

// const cardMeu = arrMenu.forEach((card) => {
//   console.log(card);
//   const menuList = document.createElement('div');
//   menuList.classList.add('card-wrap');
//   return card;

// });

// contanierMenu.append(cardMeu)

let cardMenu = document.querySelectorAll('.cart-menu');
const cardZoom = document.querySelectorAll(".img");
for (let i = 0; i < cardMenu.length; i++) {
    cardMenu[i].addEventListener("mouseenter", () => {
        console.log(1);
        cardZoom[i].classList.toggle("zoom");
    })
        cardMenu[i].addEventListener("mouseleave", () => {
            console.log(1);
            cardZoom[i].classList.toggle("zoom");
  })}
// cardMenu.addEventListener("mouseenter", () => {
//   console.log(1);
//   cardZoom.classList.toggle("zoom");
// });
// cardMenu.addEventListener("mouseleave", () => {
//     console.log(1);
//     cardZoom.classList.toggle("zoom");
//   });
