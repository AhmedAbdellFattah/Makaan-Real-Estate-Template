const images = [
  "house-image.jpg",
  "house-image2.jpg", // Add more images as needed
  "house-image3.jpg",
];
let currentIndex = 0;

document.querySelector(".prev").addEventListener("click", function () {
  slideImage("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slideImage("next");
});

function slideImage(direction) {
  const imageElement = document.getElementById("slider-image");

  // Set the image opacity to 0 to fade out
  imageElement.style.opacity = "0";

  setTimeout(() => {
    // Update the currentIndex based on direction
    if (direction === "prev") {
      currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    // Update the image source
    imageElement.src = images[currentIndex];

    // Set opacity to 1 to fade in
    imageElement.style.opacity = "1";
  }, 150); // Updated to 0.15s
}

//Dark and light themes
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
    document.getElementById("style").innerHTML =
      ".get-started{color: whitesmoke; background-color: #00b894; box-shadow: 0 0 15px #00b894, 0 0 25px #00b894, 0 0 15px #00b894;}" +
      ".get-started:hover{color: #00b894; background-color: #E3FDFD; box-shadow: 0 0 15px #E3FDFD, 0 0 25px #E3FDFD, 0 0 15px #E3FDFD;}" +
      ".search-bar{background-color: #0c2823;}" +
      ".next,.prev{box-shadow: 0 0 15px #00b894, 0 0 25px #00b894, 0 0 15px #00b894;}" +
      ".next:hover,.prev:hover{background-color: #E3FDFD; box-shadow: 0 0 15px #E3FDFD, 0 0 25px #E3FDFD, 0 0 15px #E3FDFD; color:#00b894;}" +
      ".btn:hover{background-color: #E3FDFD; box-shadow: 0 0 15px #E3FDFD, 0 0 25px #E3FDFD, 0 0 15px #E3FDFD; color:#00b894;}" +
      "span {filter: drop-shadow(0 0 15px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 25px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 15px rgba(0, 184, 148, 0.5));}" +
      ".search:hover{background-color: #E3FDFD; box-shadow: 0 0 15px #E3FDFD, 0 0 25px #E3FDFD, 0 0 15px #E3FDFD; color:#00b894;}" +
      ".search {box-shadow: 0 0 20px #e1eeee;}" +
      ".search-bar select,input{background-color:#444c49; color:whitesmoke;}" +
      "input::placeholder {color: white;}" +
      "nav{box-shadow: 0 0 20px #e1eeee;}" +
      ".add-prop-btn1{background: transparent;}" +
      ".add-prop-btn{background:#078c6e;}" +
      ".dropdown-content li a:hover {color:black;}" +
      ".icons a{background-color: #1c1c1c; box-shadow:0 0 0px #ffffff, 0 0 15px #fff, 0 0 1px #fff; color:#fff;}" +
      ".icons a:hover{background-color: #E3FDFD; box-shadow: 0 0 15px #E3FDFD, 0 0 25px #E3FDFD, 0 0 15px #E3FDFD; color:#00b894;}" +
      ".title h1{filter: drop-shadow(0 0 15px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 25px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 15px rgba(0, 184, 148, 0.5));}" +
      ".card{background-color:#181818;}" +
      "h2{color:#a6a6a6;}" +
      ".title1 h1{filter: drop-shadow(0 0 15px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 25px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 15px rgba(0, 184, 148, 0.5));}" +
      ".footer{background-color:black;}" +
      ".penguin{filter: drop-shadow(0 0 15px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 25px rgba(0, 184, 148, 0.5)) drop-shadow(0 0 15px rgba(0, 184, 148, 0.5));}" +
      ".penguin:hover{ filter: drop-shadow(0 0 15px #fff);}";
    document.querySelector(".btn").style.boxShadow =
      "0 0 15px #00b894, 0 0 25px #00b894, 0 0 15px #00b894";
  } else {
    icon.src = "moon.png";
    document.getElementById("style").innerHTML = "";
    document.querySelector(".btn").style.boxShadow = "";
  }
};

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.getElementById("myButton").addEventListener("click", function () {
  this.classList.toggle("clicked");
});

document.getElementById("myButton").addEventListener("click", function () {
  this.classList.add("clicked");
  setTimeout(() => {
    this.classList.remove("clicked");
  }, 1000); // 1000 milliseconds = 1 second
});

//A function to hide the button in a height of 100vh and display it when the user exceed this height
function toggleButtonVisibility() {
  const button = document.getElementById("myButton");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > viewportHeight) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }
}

// Check on scroll and when the page loads
window.addEventListener("scroll", toggleButtonVisibility);
window.addEventListener("load", toggleButtonVisibility);

//for the loading page
function closepreloader() {
  document.getElementById("preloader").style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(closepreloader, 1000);
});

//Increase the width of the navbar when scrolling
const navbarSelector = "nav#navbar";
const navbar = document.querySelector(navbarSelector);

function addStyles(selector) {
  const style = `
        ${selector} {
            transition: width 0.5s ease-in-out
        }

        ${selector}.small {
            position:fixed;
            width: 77.38%;
            left:11%;
            right: 11%;
            top:0%;
        }
    `;
  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}

addStyles(navbarSelector);

window.addEventListener("scroll", () => {
  window.scrollY > 38
    ? navbar.classList.add("small")
    : navbar.classList.remove("small");
});

//footer audio of a penguin
const audio = new Audio();
audio.src = "Noot noot.mp3";
