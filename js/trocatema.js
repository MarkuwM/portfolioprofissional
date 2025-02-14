document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-bs-theme", savedTheme);

    updateIcon(savedTheme);

    toggleButton.addEventListener("click", function () {
        let currentTheme = html.getAttribute("data-bs-theme") || "light";
        let newTheme = currentTheme === "light" ? "dark" : "light";

        html.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        toggleButton.innerHTML = theme === "light" 
            ? '<i class="bi bi-sun text-warning fs-4"></i>' 
            : '<i class="bi bi-moon text-primary fs-4"></i>';
    }
});
