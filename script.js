document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
