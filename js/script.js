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
    overlay.classList.add("open");
})


let popup = document.getElementById("popup");

// open popup

let menuLink = document.getElementsByClassName("nav__item");
if (popup && menuLink.length) {
    for (let link of menuLink) {
        link.addEventListener("click", function () {
            popup.classList.add("popup--open")
        })
    }
};

document.addEventListener("click", function (evt) {
    let targetEl = evt.target;     
    do {
        for (let link of menuLink) {
            if( targetEl == link) {
                link.addEventListener("click", function () {
                    popup.classList.add("popup--open")
                });
                return;
            }            
        }
        if (targetEl == popup) {
            return;
        };
        if (targetEl != document) {
            targetEl = targetEl.parentNode;
            console.log(targetEl);
        } else {
            popup.classList.remove("popup--open");
            return;
        }
    } while (targetEl);
});


// popup
let submenuItem = document.getElementsByClassName("p-menu__item");

if (popup && submenuItem.length) {
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