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

function validateContactForm(event) {
    const form = event.target;
    const nameInput = document.getElementById('name'); 
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    if (!nameInput || !emailInput || !messageInput) return;
    let isValid = true;
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    if (nameInput.value.trim() === "") {
        displayError(nameInput, "Your name is required.");
        isValid = false;
    }
    if (emailInput.value.trim() === "") {
        displayError(emailInput, "Your email is required.");
        isValid = false;
    }
    if (messageInput.value.trim() === "") {
        displayError(messageInput, "A message is required.");
        isValid = false;
    }
    if (!isValid) {
        event.preventDefault(); 
    }
}

function displayError(inputElement, message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.style.color = 'red'; 
    errorEl.style.fontSize = '0.9rem';
    errorEl.style.marginTop = '5px';
    errorEl.innerHTML = message;
    inputElement.parentNode.insertBefore(errorEl, inputElement.nextSibling);
}

document.addEventListener("DOMContentLoaded", function() {
    const pauseButton = document.getElementById("pause_button");
    const muteButton = document.getElementById("mute_button");
    const videoElement = document.getElementById("urvid");
    if (videoElement) {
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
    }
    const contactForm = document.getElementById('contactForm'); 
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});
