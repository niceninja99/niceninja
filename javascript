document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio('path/to/sound.mp3');
    document.querySelector('header').addEventListener('click', function() {
        audio.play();
    });
});
