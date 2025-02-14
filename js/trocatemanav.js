document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;
    const navbar = document.getElementById("navbar");

    let theme = localStorage.getItem("theme") || "dark";
    applyTheme(theme);

    themeToggle.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    });

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("bg-dark", "text-light");
            body.classList.remove("bg-light", "text-dark");
            navbar.classList.add("bg-dark", "navbar-dark");
            navbar.classList.remove("bg-light", "navbar-light");
            themeIcon.classList.replace("bi-moon", "bi-sun");
        } else {
            body.classList.add("bg-light", "text-dark");
            body.classList.remove("bg-dark", "text-light");
            navbar.classList.add("bg-light", "navbar-light");
            navbar.classList.remove("bg-dark", "navbar-dark");
            themeIcon.classList.replace("bi-sun", "bi-moon");
        }
    }
});
