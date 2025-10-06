function toggleVideo() {
    var video = document.getElementById("urvid");
    var button = document.getElementById("pause_button");
    
    if (video) { 
        if (video.paused) {
            video.play();
            button.innerHTML = "PAUSE BACKGROUND";
        } else {
            video.pause();
            button.innerHTML = "PLAY BACKGROUND";
        }
    }
}

function toggleMute() {
    var video = document.getElementById("urvid");
    var button = document.getElementById("mute_button");

    if (video) {
        video.muted = !video.muted;

        if (video.muted) {
            button.innerHTML = "SOUND ON";
        } else {
            button.innerHTML = "SOUND OFF";
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const pauseButton = document.getElementById("pause_button");
    const muteButton = document.getElementById("mute_button");
    const videoElement = document.getElementById("urvid");
    
    if (pauseButton) {
        pauseButton.addEventListener('click', toggleVideo);
        if (videoElement && !videoElement.paused) {
            pauseButton.innerHTML = "PAUSE BACKGROUND";
        } else {
            pauseButton.innerHTML = "PLAY BACKGROUND";
        }
    }

    if (muteButton) {
        muteButton.addEventListener('click', toggleMute);
        
        if (videoElement && videoElement.muted) {
            muteButton.innerHTML = "SOUND ON";
        } else {
            muteButton.innerHTML = "SOUND OFF";
        }
    }
});
