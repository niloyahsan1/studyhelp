const btn = document.querySelector(".backToTop");

// Show button after scrolling down 100px
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Scroll to top on click (instant)
btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
