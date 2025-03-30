// Gestion du mode sombre/clair
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('theme-toggle');
    icon.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
});

// Gestion de l'ouverture/fermeture du menu latéral
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});
