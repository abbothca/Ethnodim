"use strict";

let burgerMenu = document.getElementById('burgerButton');
let burgerClose = document.getElementById('close__burger');

let overlay = document.getElementById('burger-menu');

// if (burgerMenu && overlay && burgerClose) {
//     burgerMenu.addEventListener('click', function () {
//         overlay.classList.add("open");
//     });

//     burgerClose.addEventListener('click', function () {
//         overlay.classList.toggle("open");
//     });

//     // close__burger
// }

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.add("open");
})


let popup = document.getElementsByClassName("popup");

// open popup

// let menuLink = document.getElementsByClassName("nav__item");
// if (popup && menuLink.length) {
//     for (let link of menuLink) {
//         link.addEventListener("click", function () {
//             popup.classList.add("popup--open")
//         })
//     }
// };


// popup
let submenuItem = document.getElementsByClassName("p-menu__item");

if (popup.length && submenuItem.length) {
    for (let link of submenuItem) {
        link.addEventListener("click", function () {
            let previousLink = document.getElementsByClassName("p-menu__item--active");
            if (previousLink.length) {
                previousLink[0].classList.remove("p-menu__item--active");
            }
            link.classList.add("p-menu__item--active");
        })
    }
}