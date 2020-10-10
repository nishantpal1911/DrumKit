//Detecting drum button click
$(".drum").on("click",function (){
  playSound(this.innerHTML);
  animateButton(this.innerHTML);
});

//Detecting keyboard keypress
$(document).on("keydown",function (event){
  if(playSound(event.key))
    animateButton(event.key);
});

//Function to play sound based on key
function playSound(key){
  switch(key){
    case 'w': new Audio('sounds/tom-1.mp3').play();
    break;
    case 'a': new Audio('sounds/tom-2.mp3').play();
    break;
    case 's': new Audio('sounds/tom-3.mp3').play();
    break;
    case 'd': new Audio('sounds/tom-4.mp3').play();
    break;
    case 'j': new Audio('sounds/snare.mp3').play();
    break;
    case 'k': new Audio('sounds/crash.mp3').play();
    break;
    case 'l': new Audio('sounds/kick-bass.mp3').play();
    break;
    default: return false;
  }
  return true;
}

//Function to animate active button
function animateButton(key){
    var activeButton = $("." + key);
    activeButton.addClass("pressed");
    setTimeout(function(){
      activeButton.removeClass("pressed");
    },100);
}
