  <script>
    function myFunction() {
      let video = document.getElementById("urvid");
      let btn = document.getElementById("pause_button");

      if (video.paused) {
        video.play();
        btn.innerText = "Pause";
      } else {
        video.pause();
        btn.innerText = "Play";
        }
    }
  </script>