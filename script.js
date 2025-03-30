document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".menu-toggle");
    const themeToggle = document.querySelector("#theme-toggle");

    // Gestion du menu rétractable
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("open"); // Ajoute ou enlève la classe "open"
    });

    // Gestion du mode sombre/clair
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        // Changer l'icône du bouton selon le mode actif
        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌞"; // Mode clair
        } else {
            themeToggle.textContent = "🌙"; // Mode sombre
        }
    });
});
