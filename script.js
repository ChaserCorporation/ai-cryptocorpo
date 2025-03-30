document.addEventListener("DOMContentLoaded", function () {
    // Mode sombre/clair
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });

    // Menu latéral rétractable
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

    // Vérifier si on est en mode clair au chargement de la page
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    }
});
