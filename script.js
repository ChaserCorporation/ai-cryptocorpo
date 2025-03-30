const themeToggle = document.getElementById('theme-toggle');

// Vérifier le mode stocké dans localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙 Mode Sombre';
}

// Changer de mode en cliquant sur le bouton
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Mode Sombre';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Mode Clair';
    }
});
