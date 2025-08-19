window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitioned", function () {
        document.body.removeChild("loader");
    });
});
