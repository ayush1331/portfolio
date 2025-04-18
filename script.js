function toggleTheme() {
    const body = document.body;
    const themeToggleIcon = document.querySelector('.theme-toggle i');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleIcon.style.color = '#121212'; // Dark icon for light mode
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleIcon.style.color = '#ffffff'; // Light icon for dark mode
    }
}