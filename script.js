'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * header
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * back to top
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

const backTopBtnActive = function () {
  if (window.scrollY > 300) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", backTopBtnActive);
