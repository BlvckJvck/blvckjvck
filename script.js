const heading = document.getElementById('heading');

heading.addEventListener('mouseenter', () => {
    document.body.classList.add('inverted');
});

heading.addEventListener('mouseleave', () => {
    document.body.classList.remove('inverted');
});
