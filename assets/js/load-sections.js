document.addEventListener('DOMContentLoaded', function () {
    const sections = ['about', 'experience', 'education', 'skills', 'interests'];

    sections.forEach(section => {
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById(section).innerHTML = html;
            })
            .catch(error => console.error(`Error loading ${section} section:`, error));
    });
});