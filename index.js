var player = document.getElementById("player");
var playingNowText = document.getElementById("playing-now");
var playPauseButton = document.getElementsByClassName("fa-circle-play");           
var selection = null;
var endedPlaylist = null;
var playingNow = null;

function selectRandom(station){
	var selection = Object.keys(station);
	return selection[Math.floor(Math.random() * selection.length)];
}

function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}
    
function livePlaylistPlay() {
	if (endedPlaylist != livePlaylist) {
		randomLiveSong = livePlaylist[selectRandom(livePlaylist)];
	    endedPlaylist = livePlaylist;
	
	    player.pause();
        player.src = randomLiveSong;
        player.play();
    
        playingNow = getKeyByValue(endedPlaylist, randomLiveSong)
	    playingNowText.textContent = playingNow;

	    delete livePlaylist[playingNow]; 
    
	    document.getElementById("button").classList.remove("fa-circle-play");
	    document.getElementById("button").classList.add("fa-circle-pause");
	    document.getElementById("play-button").setAttribute("onclick", "togglePlay()");
	} else {
		//pass
	}
}

function oldPlaylistPlay() {
	if (endedPlaylist != oldPlaylist) {
		randomOldSong = oldPlaylist[selectRandom(oldPlaylist)];
	    endedPlaylist = oldPlaylist;
	
	    player.pause();
        player.src = randomOldSong;
        player.play();
    
        playingNow = getKeyByValue(endedPlaylist, randomOldSong)
	    playingNowText.textContent = playingNow;
	
	    delete oldPlaylist[playingNow]; 
	
        document.getElementById("button").classList.remove("fa-circle-play");
	    document.getElementById("button").classList.add("fa-circle-pause");
	    document.getElementById("play-button").setAttribute("onclick", "togglePlay()");
	} else {
		//pass
		}
}
    
function firstPlay() {
	randomLiveSong = livePlaylist[selectRandom(livePlaylist)];
	endedPlaylist = livePlaylist;
	
	player.pause();
    player.src = randomLiveSong;
    player.play();
    
    playingNow = getKeyByValue(endedPlaylist, randomLiveSong)
	playingNowText.textContent = playingNow;
	
	delete livePlaylist[playingNow]; 
    
	document.getElementById("button").classList.remove("fa-circle-play");
	document.getElementById("button").classList.add("fa-circle-pause");
	document.getElementById("play-button").setAttribute("onclick", "togglePlay()");
}
		
function togglePlay() {
	if (player.paused) {
		player.play();
	} else {
	    if (player.muted == false) {
	        player.muted = true;
	        document.getElementById("button").classList.remove("fa-circle-pause");
	        document.getElementById("button").classList.add("fa-circle-play");
	    } else {
	        player.muted = false;
	        document.getElementById("button").classList.remove("fa-circle-play");
	        document.getElementById("button").classList.add("fa-circle-pause");
	    }
	}
}

function endedSong() {
	randomEndedSong = endedPlaylist[selectRandom(endedPlaylist)];
	player.pause();
    player.src = randomEndedSong;
    player.play();
    playingNow = getKeyByValue(endedPlaylist, randomEndedSong)
	playingNowText.textContent = playingNow;
}

function transitionPlay() {
	player.src = transition;
    player.play();
    setTimeout(endedSong, 6000);
}

player.addEventListener('ended',function(){
	transitionPlay();
});
   
player.volume = 1;
   
function minusVolume() {
	player.volume -= 0.1;
}

function plusVolume() {
	player.volume += 0.1;
}

function dropdownOpen() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

navigator.mediaSession.setActionHandler('pause', function() {});
navigator.mediaSession.setActionHandler('seekto', function() {});