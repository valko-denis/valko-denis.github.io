let $ = document;

const next = $.querySelector("#next");

const play = $.querySelector("#play");

const prev = $.querySelector("#prev");

const musicTitle = $.querySelector("#song-title");

const musicArtist = $.querySelector("#song-artist");

const connectButton = $.querySelector("#connect");

const infoButton = $.querySelector(".info-button");

const music = $.querySelector("audio");

let isPlaying = false;

let isLoop = false;

let selectedMusic = 0;



const firstPlay = () =>
{
	nextMusic();
	isPlaying = true;
	music.play();
	$.querySelector("#play").classList.replace("fa-play", "fa-pause");
	$.getElementById("play").setAttribute("onclick", "togglePlay()");
}


const togglePlay = () =>
{
	isPlaying ? pauseMusic() : playMusic()
}


const playMusic = () => 
{
	music.play();
    $.querySelector("#play").classList.replace("fa-play", "fa-pause");
    isPlaying = true;
}


const pauseMusic = () => 
{
	music.pause();
    $.querySelector("#play").classList.replace("fa-pause", "fa-play");
    isPlaying = false;
}


const nextMusic = () => 
{
    selectedMusic = (selectedMusic + 1) % playList.length;
    loadMusic(playList[selectedMusic]);
    music.duration = 0;
    if (isPlaying) {
       music.play();
    }
}


const prevMusic = () => 
{
   selectedMusic = (selectedMusic - 1 + playList.length) % playList.length;
   loadMusic(playList[selectedMusic]);
   if (isPlaying) {
      music.play();
   }
}


const loopEnable = () =>
{
	isLoop = true;
	music.setAttribute("loop", "loop");
	loop.style.color = "#000";
}


const loopDisable = () =>
{
	isLoop = false;
	music.removeAttribute("loop");
	loop.style.color = "#999";
}


const loadMusic = (playList) => 
{
   musicArtist.textContent = playList.artist;
   musicTitle.textContent = playList.musicName;
   music.src = playList.musicPath;
}
 
    
    
next.addEventListener("click", () => 
{
	nextMusic();
});

prev.addEventListener("click", () =>
{
	prevMusic();
});

loop.addEventListener("click", () =>
{
	isLoop ? loopDisable() : loopEnable();
});

connectButton.addEventListener("click", () =>
{
	alert("In development...")
});

infoButton.addEventListener("click", () =>
{
	alert("This platform is developed exclusively for personal and family listening. According to Article 27 of the Law of Ukraine \"On Copyright and Related Rights\".")
});

music.addEventListener("ended",  () =>
{
	nextMusic();
});

navigator.mediaSession.setActionHandler("previoustrack", () => 
{
	prevMusic();
});

navigator.mediaSession.setActionHandler("nexttrack", () => 
{ 
	nextMusic();
});