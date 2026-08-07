function css_switch() {
    const currentTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    
    // Update theme switcher icon if button exists
    const themeBtn = document.querySelector('.nav-btn[onclick="css_switch()"]');
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        if (icon) {
            if (theme === "dark") {
                icon.className = "fa-solid fa-sun";
                themeBtn.title = "Switch to Light Theme";
            } else {
                icon.className = "fa-solid fa-moon";
                themeBtn.title = "Switch to Dark Theme";
            }
        }
    }

    // Update stylesheet reference on homepage if it exists
    const stylesheet = document.getElementById("stylesheet");
    if (stylesheet) {
        const isSubDir = window.location.pathname.includes("/courses/");
        const basePath = isSubDir ? ".." : ".";
        if (theme === "dark") {
            stylesheet.href = `${basePath}/css/index2.css`;
        } else {
            stylesheet.href = `${basePath}/css/index1.css`;
        }
    }
}

// Immediately apply saved theme on load to prevent flashes
(function() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
})();

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
});
