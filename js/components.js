document.addEventListener("DOMContentLoaded", function () {
    const isSubDir = window.location.pathname.includes("/courses/");
    const basePath = isSubDir ? ".." : ".";

    // Load Header Component if element exists
    const headerContainer = document.getElementById("header-component");
    if (headerContainer) {
        const isHomePage = headerContainer.hasAttribute("data-is-home");
        const lightSwitchBtn = isHomePage ? '<button onclick="css_switch()">Light/Dark</button>' : '';
        const gitImgPath = `${basePath}/image/git.png`;
        const homePath = isSubDir ? `${basePath}/index.html` : 'index.html';

        headerContainer.innerHTML = `
    <!-- Back to Top Button -->
    <button class="backToTop"><i class="fa fa-arrow-up"></i></button>

    <!-- Page Loader -->
    <div class="loader"></div>

    <!-- GitHub Logo -->
    <div id="git_link">
        <a href="https://github.com/niloyahsan1/studyhelp.git" target="_blank">
            <img src="${gitImgPath}" id="github" alt="GitHub">
        </a>
    </div>

    <!-- Scroll Bar -->
    <div class="header_scroll"></div>

    <!-- Header Navigation -->
    <header>
        <nav>
            <ul>
                <li><a href="${homePath}">Home</a></li>
                ${lightSwitchBtn}
            </ul>
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
