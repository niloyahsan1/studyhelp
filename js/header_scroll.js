window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollAmount = Math.min(0.5, scrollTop / 500);

    header.style.backgroundPositionY = scrollAmount * 100 + "%";
});
