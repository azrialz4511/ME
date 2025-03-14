// Change Background on Scroll
window.addEventListener("scroll", function () {
    let background = document.getElementById("background");
    if (window.scrollY > window.innerHeight / 2) {
        background.style.backgroundImage = "url('assets/wallpaper2.jpg')";
    } else {
        background.style.backgroundImage = "url('assets/wallpaper1.jpg')";
    }
});
// Fade-In/Out Effect for About Me Section on Scroll
document.addEventListener("scroll", function () {
    let aboutBox = document.querySelector(".info-box");
    let position = aboutBox.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        aboutBox.classList.add("visible");
    } else {
        aboutBox.classList.remove("visible");
    }
});


// Hide Scroll Prompt on Scroll
document.addEventListener("scroll", function () {
    let scrollPrompt = document.querySelector(".scroll-prompt");

    if (window.scrollY > 50) {
        scrollPrompt.classList.add("hidden");
    } else {
        scrollPrompt.classList.remove("hidden");
    }
});

document.addEventListener("scroll", function () {
    let scrollPrompt = document.querySelector(".scroll-prompt");

    if (window.scrollY > 100) { // Adjust the scroll threshold if needed
        scrollPrompt.classList.add("hidden");
    } else {
        scrollPrompt.classList.remove("hidden");
    }
});
window.addEventListener("scroll", function () {
    let background = document.getElementById("background");
    let scrollPosition = window.scrollY;

    if (scrollPosition > window.innerHeight / 2) {
        background.style.background = "url('assets/wallpaper2.jpg') no-repeat center center/cover";
    } else {
        background.style.background = "url('assets/wallpaper1.jpg') no-repeat center center/cover";
    }
});

function scrollToCertifications() {
    document.getElementById("certifications").scrollIntoView({ behavior: "smooth" });
}
