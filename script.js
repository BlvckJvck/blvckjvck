const heading = document.getElementById('heading');
const body = document.body;
const video = document.getElementById('background-video');

// Handle the hover effect
heading.addEventListener('mouseenter', () => {
    body.classList.add('inverted');
});

heading.addEventListener('mouseleave', () => {
    body.classList.remove('inverted');
});

// Display video if it loads successfully
video.addEventListener('canplay', () => {
    video.style.display = 'block'; // Show video if it can play
});
