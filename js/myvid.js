const video = document.getElementById("myVideo");
const btn = document.getElementById("pause_button");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.textContent = "Pause Background";
  } else {
    video.pause();
    btn.textContent = "Play Background";
  }
});
