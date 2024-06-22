const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
    button.addEventListener('click', function() {
        const audioId = this.id.replace('playButton', 'audio');
        const audioElement = document.getElementById(audioId);
        const box = this.closest('.box');

        if (audioElement.paused) {
            audioElement.play();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'; // Pause icon
            box.classList.add('glow-effect');
        } else {
            audioElement.pause();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'; // Play icon
            box.classList.remove('glow-effect');
        }
    });
});


const volumeSliders = document.querySelectorAll('.slider input[type="range"]');
volumeSliders.forEach(slider => {
    slider.addEventListener('input', function() {
        const audioId = this.id.replace('volume', 'audio');
        const audioElement = document.getElementById(audioId);
        audioElement.volume = this.value / 100;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sideMenuIcon = document.querySelector('.side');
    const menu = document.getElementById('menu');

    sideMenuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});
    document.getElementById("Home").addEventListener("click", function() {
        window.location.href = "file:///C:/Users/Harshita%20Raj%20Singh/OneDrive/Desktop/serenity/serenity.html";  // Replace with the actual URL of your home page
    });

    document.getElementById("Blog").addEventListener("click", function() {
        window.location.href = "file:///C:/Users/Harshita%20Raj%20Singh/OneDrive/Desktop/serenity/blog.html";  // Replace with the actual URL of your blog page
    });

    document.getElementById("About").addEventListener("click", function() {
        window.location.href = "about.html";  // Replace with the actual URL of your about page
    });

    // You can add functionality for the "Download" button similarly if needed
    document.getElementById("Download").addEventListener("click", function() {
        window.location.href = "download.html";  // Replace with the actual URL of your download page
    });