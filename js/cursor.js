const cursor = document.querySelector(".kursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let posX = mouseX;
let posY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    requestAnimationFrame(animate);
}

animate();
