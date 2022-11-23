document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="carousel-nav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".carousel-button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) => item.classList.remove("carousel-item-selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel-button-selected")
      );

      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-button-selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-button-selected");
});

//navbar
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClassName("navbar").style.top = "0";
  } else {
    document.getElementByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

//gallery
const slideGallery = document.querySelector(".slides");
const slides = slideGallery.querySelectorAll("div");
const thumbnailContainer = document.querySelector(".thumbnails");
const slideCount = slides.length;
const slideWidth = 540;

const highlightThumbnail = () => {
  thumbnailContainer
    .querySelectorAll("div.highlighted")
    .forEach((el) => el.classList.remove("highlighted"));
  const index = Math.floor(slideGallery.scrollLeft / slideWidth);
  thumbnailContainer
    .querySelector(`div[data-id="${index}"]`)
    .classList.add("highlighted");
};

const scrollToElement = (el) => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(index * slideWidth, 0);
};

thumbnailContainer.innerHTML += [...slides]
  .map((slide, i) => `<div data-id="${i}"></div>`)
  .join("");

thumbnailContainer.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", () => scrollToElement(el));
});

slideGallery.addEventListener("scroll", (e) => highlightThumbnail());

highlightThumbnail();
//hamburger
const hamburger = document.querySelector(".hamburger");
const line = document.querySelector(".line");

hamburger.addEventListener("click", () => {
  line.classList.toggle("active");
});

/* mobile, add hover effect when img is in viewport */
const images = document.querySelectorAll(".img");

var myElement = document.getElementById("my-element");

function elementInViewport() {
  var bounding = myElement.getBoundingClientRect();
  var myElementHeight = myElement.offsetHeight;
  var myElementWidth = myElement.offsetWidth;

  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  ) {
    alert("Element is in the viewport!");
  } else {
    alert("Element is NOT in the viewport!");
  }
}

/* get scroll in px */
