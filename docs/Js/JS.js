window.onload = function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000);
};

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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

const navbarSelector = "nav#navbar";
const navbar = document.querySelector(navbarSelector);

function addStyles(selector) {
  const style = `
        ${selector} {
            transition: width 0.5s ease-in-out
        }

        ${selector}.small {
           position: fixed;
    width: 77.38%;
    left: 11%;
    right: 11%;
    top: 0%;
    z-index: 9999;
}
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
