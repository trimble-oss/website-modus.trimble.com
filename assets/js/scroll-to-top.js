var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".btn-to-top");
var rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollToTopBtn.classList.add("showBtn");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
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
