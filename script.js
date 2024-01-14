function toggleNav() {
    var nav = document.querySelector("nav");
    nav.style.transform = nav.style.transform === "translateY(-80px)" ? "translateY(0)" : "translateY(-80px)";
}
document.addEventListener("DOMContentLoaded", function () {
    var splash = document.createElement("div");
    splash.classList.add("splash");
    document.body.appendChild(splash);

    var buttons = document.querySelectorAll("nav a");
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var rect = button.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            splash.style.left = x + "px";
            splash.style.top = y + "px";
            splash.style.opacity = 1;

            setTimeout(function () {
                splash.style.opacity = 0;
            }, 1500); // 1.5 seconds for the splash animation
        });