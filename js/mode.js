var lightMode = "../css/index2.css";
var darkMode = "../css/index1.css";
var isLightMode = true;

function css_switch() {
    var stylesheet = document.getElementById("stylesheet");

    // switch between light and dark modes
    if (isLightMode) {
        stylesheet.href = darkMode;
    } else {
        stylesheet.href = lightMode;
    }

    // Update the mode status
    isLightMode = !isLightMode;
}
