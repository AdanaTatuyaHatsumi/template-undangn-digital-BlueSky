var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
    if(count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play";
    }
}