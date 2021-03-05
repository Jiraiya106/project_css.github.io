"use strict";

let boxElement = document.getElementById("box");

let burgerMenuEl = document.getElementById("burger");

boxElement.addEventListener("click", () => {
  burgerMenuEl.classList.toggle("open");
});
const navLinks = document.querySelectorAll(".header_link");
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", () => {
    burgerMenuEl.classList.remove("open");
  });
}
