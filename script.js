 
window.onscroll = function() {myFunction()};

function myFunction() {
if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
document.getElementById("second").className = "test";
} else {
document.getElementById("second").className = "test2";
}
}


function PlaySound(soundobj) {
var thissound=document.getElementById(soundobj);
thissound.play();
}
function StopSound(soundobj) {
var thissound=document.getElementById(soundobj);
thissound.pause();
thissound.currentTime = 0;
}


