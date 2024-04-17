const heading = document.getElementById('heading');
const body = document.body;

heading.addEventListener('mouseenter', () => {
    body.classList.add('inverted');
});

heading.addEventListener('mouseleave', () => {
    body.classList.remove('inverted');
});
