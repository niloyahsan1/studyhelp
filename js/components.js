document.addEventListener("DOMContentLoaded", function () {
    const isSubDir = window.location.pathname.includes("/courses/");
    const basePath = isSubDir ? ".." : ".";

    // Load Header Component if element exists
    const headerContainer = document.getElementById("header-component");
    if (headerContainer) {
        const lightSwitchBtn = '<button class="nav-btn" onclick="css_switch()" title="Toggle Theme"><i class="fa-solid fa-moon"></i></button>';
        const logoImgPath = `${basePath}/image/logo.png`;
        const homePath = isSubDir ? `${basePath}/index.html` : 'index.html';
        const feedbackPath = isSubDir ? 'course.html?id=feedback' : './courses/course.html?id=feedback';

        headerContainer.innerHTML = `
    <!-- Back to Top Button -->
    <button class="backToTop"><i class="fa fa-arrow-up"></i></button>

    <!-- Page Loader -->
    <div class="loader"></div>

    <!-- Scroll Bar -->
    <div class="header_scroll"></div>

    <!-- Header Navigation Bar -->
    <header>
        <nav>
            <a href="${homePath}" class="nav-logo">
                <img src="${logoImgPath}" alt="Logo" class="logo-img">
                <span>Study Help</span>
            </a>
            
            <ul class="nav-links">
                <li><a href="${homePath}">Home</a></li>
                <li><a href="https://drive.google.com/drive/folders/1Im4c1Rmvl3mo7BanixPvcEtwGlMfAa7d?usp=sharing" target="_blank">Contribute</a></li>
                <li><a href="${feedbackPath}">Feedback</a></li>
            </ul>

            <div class="nav-actions">
                ${lightSwitchBtn}
                <a href="https://github.com/niloyahsan1/studyhelp.git" target="_blank" class="nav-btn" title="GitHub Repository">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </nav>
    </header>
`;

        // Inject supporting scripts dynamically if not already loaded
        loadScript(`${basePath}/js/backToTop.js`);
        loadScript(`${basePath}/js/page_loader.js`);
        loadScript(`${basePath}/js/header_scroll.js`);
    }

    // Load Footer Component if element exists
    const footerContainer = document.getElementById("footer-component");
    if (footerContainer) {
        footerContainer.innerHTML = `
    <div class="footer">
        <p>niloyahsan.official@gmail.com</p>
        <p>&copy; 2026 | Implemented by <a href="https://niloyahsan.is-a.dev" target="_blank">Niloy Ahsan</a></p>
    </div>
`;
    }
});

function loadScript(src) {
    if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
    }
}
