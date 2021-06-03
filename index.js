// Mouse Input

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    keyOrClick(this.textContent); //Finds which button is clicked by (this.textContent) and the fn works
    buttonAnimation(this.textContent);
  });
}

// Keyboard Input

document.addEventListener("keydown", function (event) {
  keyOrClick(event.key); //finds which key is pressed by (event.key) and function works
  buttonAnimation(event.key);
});

// Function which takes keyboard or mouse input

function keyOrClick(clickedOrPressed) {
  switch (clickedOrPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(this.textContent);
      break;
  }
}

// Make animation

function buttonAnimation(pressedKey) {
  var activeButton = document.querySelector("." + pressedKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
