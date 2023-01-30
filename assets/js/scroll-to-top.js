let target = document.querySelector("footer");

let scrollToTopBtn = document.querySelector(".btn-to-top");
let rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach((entry) => {
    window.onscroll = function (e) {
      if (entry.isIntersecting) {
        scrollToTopBtn.classList.add("btn-to-top-show");
      } else {
        scrollToTopBtn.classList.remove("btn-to-top-show");
      }
    };
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

const observer = new IntersectionObserver(callback);
observer.observe(target);
