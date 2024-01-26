var lightMode = "index1.css";
var darkMode = "index2.css";
var isLightMode = true;

function css_switch() {
  var stylesheet = document.getElementById("stylesheet");

  // Toggle between light and dark modes
  if (isLightMode) {
    stylesheet.href = darkMode;
  } else {
    stylesheet.href = lightMode;
  }

  // Update the mode status
  isLightMode = !isLightMode;
}
