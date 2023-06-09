let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause(){
    if (ctrlIcon.classList.contains("bi-pause-fill")){
        song.pause();
        ctrlIcon.classList.remove("bi-pause-fill");//removes the pause icon 
        ctrlIcon.classList.add("bi-play-fill");//replaces the pause icon
    }else{
        song.play();
        ctrlIcon.classList.add("bi-pause-fill");
        ctrlIcon.classList.remove("bi-play-fill");
    }
}

if (song.play()){
    setInterval(()=>{
        progress.value = song.currentTime; //moves the progress bar as the song plays
    },500);
}

progress.onchange = function (){
    song.play();
    song.currentTime = progress.value;
    
    ctrlIcon.classList.add("bi-pause-fill");
    ctrlIcon.classList.remove("bi-play-fill");
}