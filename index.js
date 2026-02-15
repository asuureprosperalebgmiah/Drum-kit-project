const soundMap = {
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
  j: "./sounds/snare.mp3",
  k: "./sounds/crash.mp3",
  l: "./sounds/kick-bass.mp3",
};
document.querySelectorAll(".drum").forEach(function (button) {
  button.addEventListener("click", function () {
        this.classList.forEach(function (drumKey) {
      if (drumKey !== "drum") {
        if (soundMap[drumKey]) {
          var audio = new Audio(soundMap[drumKey]);
          audio.play();
          buttonAnimation(drumKey);
        }
      }
    });
  });
});
document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();
    if (soundMap[key]) {
    const audio = new Audio(soundMap[key]);
    buttonAnimation(key);
    audio.play();
  }
});
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100); // ✅ Adds a short animation effect
}
