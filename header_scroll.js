window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollAmount = Math.min(0.5, scrollTop / 500); // Adjust the scroll amount as desired

  header.style.backgroundPositionY = scrollAmount * 100 + "%";
});
