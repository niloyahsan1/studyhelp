document.addEventListener("DOMContentLoaded", function () {
    const isSubDir = window.location.pathname.includes("/courses/");
    const basePath = isSubDir ? ".." : ".";

    // Load Header Component if element exists
    const headerContainer = document.getElementById("header-component");
    if (headerContainer) {
        const currentTheme = localStorage.getItem("theme") || "dark";
        const iconClass = currentTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        const btnTitle = currentTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme";
        const lightSwitchBtn = `<button class="nav-btn" onclick="css_switch()" title="${btnTitle}"><i class="${iconClass}"></i></button>`;
        const logoImgPath = `${basePath}/image/logo.png`;
        const homePath = isSubDir ? `${basePath}/index.html` : 'index.html';
        const catalogPath = isSubDir ? `${basePath}/catalog.html` : 'catalog.html';
        const feedbackPath = isSubDir ? 'course.html?id=feedback' : './courses/course.html?id=feedback';

        // Detect active state
        const isCatalog = window.location.pathname.includes("catalog.html");
        const isFeedback = window.location.search.includes("id=feedback") || window.location.href.includes("id=feedback");
        const isHome = !isCatalog && !isFeedback;

        const homeActive = isHome ? "active" : "";
        const catalogActive = isCatalog ? "active" : "";
        const feedbackActive = isFeedback ? "active" : "";

        headerContainer.innerHTML = `
    <!-- Back to Top Button -->
    <button class="backToTop"><i class="fa fa-arrow-up"></i></button>

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
                <li><a href="${homePath}" class="${homeActive}">Home</a></li>
                <li><a href="${catalogPath}" class="${catalogActive}">Courses</a></li>
                <li><a href="https://drive.google.com/drive/folders/1Im4c1Rmvl3mo7BanixPvcEtwGlMfAa7d?usp=sharing" target="_blank">Contribute</a></li>
                <li><a href="${feedbackPath}" class="${feedbackActive}">Feedback</a></li>
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

        // Force synchronize stylesheet and button state
        applyTheme(currentTheme);

        // Inject supporting scripts dynamically if not already loaded
        loadScript(`${basePath}/js/backToTop.js`);
        loadScript(`${basePath}/js/header_scroll.js`);
    }

    // Load Footer Component if element exists
    const footerContainer = document.getElementById("footer-component");
    if (footerContainer) {
        const fLogoPath = `${basePath}/image/logo.png`;
        const fHomePath = isSubDir ? `${basePath}/index.html` : 'index.html';
        const fCatalogPath = isSubDir ? `${basePath}/catalog.html` : 'catalog.html';
        const fFeedbackPath = isSubDir ? 'course.html?id=feedback' : './courses/course.html?id=feedback';

        footerContainer.innerHTML = `
    <footer class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <a href="${fHomePath}" class="footer-logo">
                    <img src="${fLogoPath}" alt="Logo" class="logo-img">
                    <span>Study Help</span>
                </a>
                <p class="footer-desc">An open-source repository of lecture slides, exam questions, lab guides, and prep materials for BRAC University courses.</p>
                <div class="footer-socials">
                    <a href="https://www.messenger.com/t/100014394886198" target="_blank" title="Messenger"><i class="fa-brands fa-facebook-messenger"></i></a>
                    <a href="https://www.facebook.com/niloy.ahsan09/" target="_blank" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/ahsan_6.6/" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="mailto:niloyahsan.official@gmail.com" target="_blank" title="Email"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://www.youtube.com/@niloyahsan4641" target="_blank" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://github.com/niloyahsan1/studyhelp.git" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            
            <div class="footer-col">
                <h4>Navigation</h4>
                <ul class="footer-links">
                    <li><a href="${fHomePath}">Home</a></li>
                    <li><a href="${fCatalogPath}">Courses Catalog</a></li>
                    <li><a href="https://drive.google.com/drive/folders/1Im4c1Rmvl3mo7BanixPvcEtwGlMfAa7d?usp=sharing" target="_blank">Contribute Files</a></li>
                    <li><a href="${fFeedbackPath}">Share Feedback</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Developer</h4>
                <ul class="footer-links">
                    <li><a href="https://niloyahsan.is-a.dev" target="_blank">Niloy Ahsan (Portfolio)</a></li>
                    <li><a href="https://github.com/niloyahsan1/studyhelp.git" target="_blank">Repository Source</a></li>
                    <li><a href="mailto:niloyahsan.official@gmail.com">Contact Developer</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-divider"></div>
        
        <div class="footer-bottom">
            <p>&copy; 2026 Study Help. All rights reserved.</p>
            <p>Designed & Implemented by <a href="https://niloyahsan.is-a.dev" target="_blank">Niloy Ahsan</a></p>
        </div>
    </footer>
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
