//nav drop-down
const dropDown = document.querySelector("nav.drop-down");
const hamburger = document.querySelector("div.hamburger");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});

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

/* hide navbar when scrolling down and show when scrolling up */
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < navbarHeight) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + navbarHeight + "px";
    dropDown.classList.remove("active");
    hamburger.classList.remove("active");
  }
  prevScrollpos = currentScrollPos;
});

/* close drop-down menu when clicking outside of it */
window.addEventListener("click", (e) => {
  if (e.target !== dropDown && e.target !== hamburger) {
    dropDown.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

const all_videos = document.querySelectorAll("video");

all_videos.forEach((video) => {
  video.addEventListener("mouseleave", () => {
    video.pause();
  });

  // play video when hovering
  video.addEventListener("mouseover", () => {
    video.play();
  });
});

/* change video source for mobile and desktop */
const video = document.querySelector("video");
const videoSource = document.querySelector(" .card-img-1 source");

const changeVideoSource = () => {
  if (window.innerWidth < 768) {
    videoSource.src = "images/Mloafer_done02.mp4";
  } else {
    videoSource.src = "images/Dloafer_done02.mp4";
  }
  video.load();
};

window.addEventListener("resize", () => {
  changeVideoSource();
});
changeVideoSource();

//navbar
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/* let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClassName("navbar").style.top = "0";
  } else {
    document.getElementByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}; */

//gallery
const slideGallery = document.querySelector(".slides");
/* const slides = slideGallery.querySelectorAll("div"); */
const thumbnailContainer = document.querySelector(".thumbnails");
/* const slideCount = slides.length; */
const slideWidth = 540;

/* const highlightThumbnail = () => {
  thumbnailContainer
    .querySelectorAll("div.highlighted")
    .forEach((el) => el.classList.remove("highlighted"));
  const index = Math.floor(slideGallery.scrollLeft / slideWidth);
  thumbnailContainer
    .querySelector(`div[data-id="${index}"]`)
    .classList.add("highlighted");
}; */

const scrollToElement = (el) => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(index * slideWidth, 0);
};

/* thumbnailContainer.innerHTML += [...slides]
  .map((slide, i) => `<div data-id="${i}"></div>`)
  .join("");

thumbnailContainer.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", () => scrollToElement(el));
}); */

/* slideGallery.addEventListener("scroll", (e) => highlightThumbnail());
 */
/* highlightThumbnail(); */
//hamburger
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

/* remove desktop-info when scrolling down 50px and come back when scrolling to the top */
const desktopInfo = document.querySelector(".desktop-info");
const desktopInfoHeight = desktopInfo.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > desktopInfoHeight) {
    desktopInfo.classList.add("desktop-info-hidden");
  } else {
    desktopInfo.classList.remove("desktop-info-hidden");
  }
});

/* make all heart-containers clickable */
/* const heartContainers = document.querySelectorAll(".heart-container");

heartContainers.forEach((heartContainer) => {
  heartContainer.addEventListener("click", () => {
    heartContainer.classList.toggle("active");
  });
});
 */
