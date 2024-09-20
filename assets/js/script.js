"use strict";
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
//sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

//sidebar toggle functionality
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials toggle

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modelContainer = document.querySelector("[data-model-container]");
const modelCloseBtn = document.querySelector("[data-model-close-btn]");
const overlay = document.querySelector("[data-overlay]");

//model variable
const modelImg = document.querySelector("[data-model-img]");
const modelTitle = document.querySelector("[data-model-title]");
const modelText = document.querySelector("[data-model-text]");

const testimonialsModelFunc = function () {
  modelContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};
//add clck event to all modals item

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");

    if (avatar) {
      modelImg.src = avatar.src;
      modelImg.alt = avatar.alt;
    }

    if (title) {
      modelTitle.innerHTML = title.innerHTML;
    }

    if (text) {
      modelText.innerHTML = text.innerHTML;
    }

    testimonialsModelFunc();
  });
}

// for (let i = 0; i < testimonialsItem.length; i++) {
//   testimonialsItem[i].addEventListener("click", function () {
//     modelImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modelImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modelTitle.innerHTML = this.querySelector(
//       "[data-testimonials-title]"
//     ).innerHtml;
//     modelText.innerHTML = this.querySelector(
//       "[data-testimonials-text]"
//     ).innerHTML;
//     testimonialsModelFunc();
//   });
// }
//add click to close modal

modelCloseBtn.addEventListener("click", testimonialsModelFunc());
overlay.addEventListener("click", testimonialsModelFunc());
//custom select variables
const select = document.querySelector("[data-select]");
const selectItem = document.querySelector("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelector("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

//for loops

for (let i = 0; i < selectItem.length; i++) {
  selectItem[i].addEventListener("click", function () {
    let selectedValue = this.innerHtml.toLowerCase();
    selectValue.innerHtml = this.innerHtml;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter vaiable
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
  for (let i = 0; i < selectedValue.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

//add event in all filter

let lastClickBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectedValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickBtn.classList.remove("active");
    this.classList.add("active");
    lastClickBtn = this;
  });
}

// navbar

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.textContent.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
