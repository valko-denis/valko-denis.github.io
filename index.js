var player = document.getElementById("player");
var playingNowText = document.getElementById("playing-now");
var playPauseButton = document.getElementsByClassName("fa-circle-play");           
var selection = null;
var endedPlaylist = null;
var playingNow = null;
player.volume = 1;

var transition = "./sounds/transition.mp3";

var livePlaylist = {
    "We are domi – Lights off": "https://drivemusic.club/dl/p-TFbzsyhISer7R5e2DhYQ/1676069591/download_music/2021/12/domi-lights-off.mp3",
    "Onerepublic – Counting stars": "https://drivemusic.club/dl/BP7JKIu88Nh_SrRvcAX_KQ/1676036929/download_music/2014/07/onerepublic-counting-stars.mp3",
    "Eminem – Superman": "https://drivemusic.club/dl/CcqHplTLsR01PLbbiRBjIA/1676036960/download_music/2014/07/eminem-superman.mp3",
    "Nirvana – Smells like teen spirit": "https://drivemusic.club/dl/RprZeLK8XXnZEyaHV4JdRw/1676043487/download_music/2020/10/nirvana-smells-like-teen-spirit.mp3",
    "Milky Chance – Stolen Dance": "https://drivemusic.club/dl/sz9pmJL3MVkYGkSlZvd_Mg/1676042690/download_music/2013/12/milky-chance-stolen-dance.mp3",
    "Major Lazer – Lean on": "https://drivemusic.club/dl/4-zCxU9p3b9K1Y9Jnjgm5A/1676043024/download_music/2015/03/major-lazer-feat.-mo-dj-snake-lean-on.mp3",
    "Calvin Harris – Outside": "https://drivemusic.club/dl/e9Yqsvb2c7_icnFrfxPPxg/1676069031/download_music/2014/10/calvin-harris-feat.-ellie-goulding-outside.mp3",
    "Adele – Rolling in the deep": "https://drivemusic.club/dl/NNLXx8oBm3XIwSBEdvMtAg/1676069054/download_music/2014/07/adele-rolling-in-the-deep.mp3",
    "Major Lazer – Light it up": "https://drivemusic.club/dl/i1pI9wtEO8dK6PkqkxfSOw/1676042609/download_music/2015/11/major-lazer-feat.-nyla-fuse-dg-light-it-up-remix.mp3",
    "Aaron Smith – Dancin (krono remix)": "https://drivemusic.club/dl/HzadP-Zv4pjUemk39RX57A/1676042645/download_music/2014/01/aaron-smith-dancin-krono-remix.mp3",
    "Twenty One Pistols – Stressed Out": "https://drivemusic.club/dl/qmYWrc0R_IjYzbNJGnk2ww/1676043228/download_music/2015/05/twenty-one-pilots-stressed-out.mp3",
    "Portugal. The Man – Feel it still": "https://drivemusic.club/dl/0WyKaoCeTc9ux-of587Hqg/1676043261/download_music/2017/03/portugal.-the-man-feel-it-still.mp3",
    "Vance Joy – Riptide": "https://drivemusic.club/dl/1ev2biOZmP65QrnNOTsLeA/1676043288/download_music/2013/10/vance-joy-riptide.mp3",
    "Melanie Martinez – Cake": "https://now.morsmusic.org/load/1967937117/Melanie_Martinez_-_Cake_(musmore.com).mp3",
    "Katy Perry – I kissed a girl": "https://drivemusic.club/dl/E8T0h4zsNiDCMXdorUQGYw/1676069143/download_music/2014/07/katy-perry-i-kissed-a-girl.mp3",
    "Onerepublic – I ain't worried": "https://drivemusic.club/dl/uDEKrd8lh9mVvdfKnrwx4w/1676069381/download_music/2022/05/onerepublic-i-aint-worried.mp3",
    "Coldplay – Hymn for the weekend": "https://drivemusic.club/dl/WyfsDSp0K2BHzQKIuJtDpw/1676069425/download_music/2015/11/coldplay-feat.-beyonce-hymn-for-the-weekend.mp3",
    "Robin Schulz – Prayer in C": "https://drivemusic.club/dl/0_lGxPs7lAvaeF_czqTvjA/1676036988/download_music/2014/06/lilly-wood-the-prick-feat.-robin-schulz-prayer-in-c.mp3",
    "The Weekend – Blinding lights": "https://drivemusic.club/dl/lvvIAhb7kJUea5abEhQm1Q/1676043378/download_music/2019/11/the-weeknd-blinding-lights.mp3",
    "Twenty One Pistols – Heathens": "https://drivemusic.club/dl/8aBJvBX9-iaaZgDtYPuxYg/1676043400/download_music/2016/06/twenty-one-pilots-heathens.mp3",
    "DNCE – Cake by the ocean": "https://drivemusic.club/dl/N0fpZSR6omoesrrswAx2dg/1676043415/download_music/2015/09/dnce-cake-by-the-ocean.mp3",
    "DNCE – Kissing strangers": "https://drivemusic.club/dl/4SFnpcJO2ae5UbxBEwbhCw/1676043437/download_music/2017/04/dnce-feat.-nicki-minaj-kissing-strangers.mp3",
    "Linkin park – Numb": "https://drivemusic.club/dl/nRJSJOLzb0uvdfQsR7reKA/1676043474/download_music/2014/02/linkin-park-numb.mp3",
    "Sam Smith – Unholy": "https://drivemusic.club/dl/ZUpTmt5JvI6cNNnLEGQB9g/1676043872/download_music/2022/09/sam-smith-feat.-kim-petras-unholy.mp3",
    "Eminem – Mockingbird": "https://drivemusic.club/dl/i05OsdmwDfPGA_u5m8vekA/1676043895/download_music/2014/07/eminem-mockingbird.mp3",
    "David Guetta – I'm good": "https://muzon-club.net/uploads/files/2022-09/bebe-rexha-david-guetta-amp-bebe-rexha-i39m-good-blue-official-lyric-video_456239767.mp3",
    "Adele – Skyfall": "https://muzon-club.net/uploads/files/2022-05/adele-skyfall_456513625.mp3",
    "Die Antwoord – Baby's on fire": "https://mezzoforte.ru/s/artist/387621-die_antwoord_babys_on_fire.mp3",
    "Barton – Running up that hill": "https://muzon-club.net/uploads/files/2022-08/barton-running-up-that-hill_110207401.mp3",
    "Bastille – Pompeii": "https://now.morsmusic.org/load/628446000/Bastille_-_Pompeii_(musmore.com).mp3",
    "CHROMANCE – Wrap me in plastic": "https://muzon-club.net/uploads/files/2022-08/chromance-marcus-layton-wrap-me-in-plastic_58258242.mp3",
    "Daft Punk – Get lucky": "https://muzon-club.net/uploads/files/2021-09/daft-punk-feat.-pharrell-williams-nile-rodgers-get-lucky_456355945.mp3",
    "David Guetta – This Ones For You": "https://now.morsmusic.org/load/702267745/David_Guetta_-_This_Ones_For_You_(musmore.com).mp3",
    "Deorro – Five More Hours": "https://mp3bob.ru/download/muz/Deorro_and_Chris_Brown_-_Five_More_Hours_[mp3pulse.ru]_sample.mp3",
    "DJ Snake – Let me love you": "https://now.morsmusic.org/load/1476832497/Dj_Snake_Justin_Bieber_-_Let_Me_Love_You_(musmore.com).mp3",
    "Ed Sheeran – Shape of you": "https://muzon-club.net/uploads/files/2022-05/ed-sheeran-shape-of-you_456289108.mp3",
    "The Chainsmokers – Don't let me down": "https://now.morsmusic.org/load/627173951/The_Chainsmokers_Daya_-_Dont_Let_Me_Down_(musmore.com).mp3",
    "Collio – Gangstas paradise": "https://muzon-club.net/uploads/files/2022-12/collio-gangstas-paradise_73314887.mp3",
    "Imany – Don't be so shy": "https://now.morsmusic.org/load/223028305/Imany_Filatov_Karas_-_Dont_Be_So_Shy_(musmore.com).mp3",
    "James Young – Infinity": "https://now.morsmusic.org/load/736777549/Jaymes_Young_-_Infinity_(musmore.com).mp3",
    "Of monsters and man – Little talks": "https://muzon-club.net/uploads/files/2022-08/of-monsters-and-men-little-talks_6569891.mp3",
    "Maneskin – I wanna be your slave": "https://muzon-club.net/uploads/files/2022-08/maneskin-i-wanna-be-your-slave_456249536.mp3",
    "Sean Paul – No lie": "https://muzon-club.net/uploads/files/2021-05/sean-paul-feat.-dua-lipa-no-lie_456412543.mp3",
    "Sean Paul – Sean thrills": "https://muzon-club.net/uploads/files/2022-06/sia-feat.-sean-paul-cheap-thrills_4033216.mp3",
    "The chemical brothers – Go": "https://now.morsmusic.org/load/1599496174/The_Chemical_Brothers_Claude_VonStroke_-_Go_(musmore.com).mp3",
    "The Kid LAROI – Stay": "https://now.morsmusic.org/load/851323561/The_Kid_LAROI_Justin_Bieber_-_STAY_(musmore.com).mp3",
    "Stromae – Papaoutai": "https://muzon-club.net/uploads/files/2022-08/stromae-papaoutai_456354884.mp3",
    "Eiffel 65 – Blue (KNY Factory Remix)": "https://muzon-club.net/uploads/files/2022-10/eiffel-65-blue-kny-factory-remix_105395263.mp3",
    "ZAYN – Dusk Till Dawn": "https://now.morsmusic.org/load/420832185/ZAYN_Sia_-_Dusk_Till_Dawn_(musmore.com).mp3",
    "Fall Out Boy – Sugar Were Goin Down": "https://now.morsmusic.org/load/1696569949/Fall_Out_Boy_-_Sugar_Were_Goin_Down_(musmore.com).mp3",
    "The Black Eyed Peas – Pump It": "https://drivemusic.club/dl/k3Rx8Ti-NHMBQI9lVKQ3rg/1676043966/download_music/2014/07/the-black-eyed-peas-pump-it.mp3",
    "MGMT – Little dark age": "https://drivemusic.club/dl/oaQgsrNBjshvaISaq-xgTA/1676044003/download_music/2018/03/mgmt-little-dark-age.mp3",
    "The Living Tombstone – My ordinary life": "https://muzew.com/uploads/music/2021/12/My_Ordinary_Life_The_Living_Tombstone.mp3",
    "Liue – Suffer with me": "https://now.morsmusic.org/load/1021497721/Liue_-_Suffer_With_Me_(musmore.com).mp3",
    "Interworld – Metamorphosis": "https://muzon-club.net/uploads/files/2022-08/interworld-metamorphosis_105897757.mp3",
    "Interworld – Metamorphosis (Speed up)": "https://now.morsmusic.org/load/1488098272/INTERWORLD_-_METAMORPHOSIS_Sped_Up_(musmore.com).mp3",
    "Interworld – Metamorphosis 2": "https://muzon-club.net/uploads/files/2022-11/interworld-metamorphosis-2_456736033.mp3",    
    "Interworld – Rapture": "https://muzon-club.net/uploads/files/2022-12/interworld-rapture_456690313.mp3",
    "Meg Myers – Desire (Hucci Remix)": "https://mp3bob.ru/download/muz/Meg_Myers_-_Desire_(Hucci_Remix)_[mp3pulse.ru].mp3",
    "Martin Garrix – Animals": "https://drivemusic.club/dl/lBYECS_NplyPZp92Vuj8yA/1676044028/download_music/2013/06/martin-garrix-animals-original-mix.mp3",
    "Gotye – Somebody that I used to know": "https://drivemusic.club/dl/v-blfymj8IFGDERAlxmbVA/1676044047/download_music/2014/07/gotye-somebody-that-i-used-to-know.mp3",
    "Morandi – Angels": "https://drivemusic.club/dl/bS1Q6frKWAHtJZ6YU_Y4bw/1676044067/download_music/2013/12/morandi-angels.mp3",
    "Mazie – Dumb dumb": "https://now.morsmusic.org/load/879074920/mazie_-_dumb_dumb_(musmore.com).mp3",
    "Gorillaz – Feel Good Inc.": "https://muzon-club.net/uploads/files/2022-07/gorillaz-feel-good-inc._456240017.mp3",   
    "Mr.Kitty – After dark": "https://muzon-club.net/uploads/files/2021-11/mr.kitty-after-dark_456239972.mp3",
    "Robert Miles – Fable": "https://mezzoforte.ru/s/artist/350321-robert_miles_fable_dream_version.mp3",
    "Robert Miles – Children": "https://mezzoforte.ru/s/artist/445264-robert_miles_children_dream_version.mp3",
    "Lil Nas X – Old town road": "https://drivemusic.club/dl/xsH7_YhkjLSyBoAfblY3gA/1676044113/download_music/2019/04/lil-nas-x-old-town-road.mp3",
    "Edvard Maya – Stereo love": "https://mezzoforte.ru/s/artist/436923-edward_maya_amp_vika_jigulina_stereo_love_original.mp3",
    "Bon Jovi – Livin on a prayer": "https://now.morsmusic.org/load/1854281736/Bon_Jovi_-_Livin_On_A_Prayer_(musmore.com).mp3",
    "Bon Jovi – It's my life": "https://now.morsmusic.org/load/1737797712/Bon_Jovi_-_Its_My_Life_(musmore.com).mp3",
    "Burak Yeter – Tuesday": "https://now.morsmusic.org/load/603306955/Burak_Yeter_Danelle_Sandoval_-_Tuesday_(musmore.com).mp3",
    "Fly Project – Musica": "https://now.morsmusic.org/load/1521064693/Fly_Project_-_Musica_(musmore.com).mp3",
    "Lil Nas X – Industry baby": "https://drivemusic.club/dl/cCAaghDCwf8GE1Ndxo66mw/1676044176/download_music/2021/07/lil-nas-x-feat.-jack-harlow-industry-baby.mp3",
    "LMFAO – I'm sexy and I know it": "https://drivemusic.club/dl/XQ2oMdlH2fRuwF_2qTeAGg/1676042666/download_music/2011/06/lmfao-sexy-and-i-know-it.mp3",
    "Naughty Boy – La La La": "https://muzon-club.net/uploads/files/2023-02/naughty-boyampsam-smith-lalala_244530658.mp3"
};

var oldPlaylist = {
    "Desireless – Voyage voyage": "https://drivemusic.club/dl/jCqPh1NdqViYEGeaoXFDxQ/1676043569/download_music/2016/12/desireless-voyage-voyage.mp3",
    "Modern Talking – Geronimos cadillac": "https://drivemusic.club/dl/ERMAIT_JrprMBgLWikwB8Q/1676043726/download_music/2019/09/modern-talking-geronimos-cadillac-long-vocal-version.mp3",
    "Modern Talking – You my heart, you my soul": "https://drivemusic.club/dl/xiwBMFUf9hamk1njX6kwnw/1676069097/download_music/2013/02/modern-talking-youre-my-heart-youre-my-soul.mp3",
    "Modern Talking – Cheri Cheri Lady": "https://now.morsmusic.org/load/155547581/Modern_Talking_-_Cheri_Cheri_Lady_(musmore.com).mp3",
    "C.C. Catch – Strangers by night": "https://now.morsmusic.org/load/1076914554/CC_Catch_-_Strangers_by_Night_(musmore.com).mp3",    
    "Michael Jackson – Billie Jean": "https://drivemusic.club/dl/8e8Ju2j18WQ26KXmKVzQWg/1676068952/download_music/2020/03/michael-jackson-billie-jean.mp3",
    "Modern Talking – Do you wanna": "https://now.morsmusic.org/load/2076887940/Modern_Talking_-_Do_You_Wanna_(musmore.com).mp3",
    "Survivor – Eye of the tiger": "https://now.morsmusic.org/load/2018627083/Survivor_-_Eye_of_the_Tiger_(musmore.com).mp3",
    "Haddaway – What is love": "https://now.morsmusic.org/load/16686339/Haddaway_-_What_Is_Love_(musmore.com).mp3",
    "Joy – Touch by touch": "https://now.morsmusic.org/load/1924795295/Joy_-_Touch_By_Touch_(musmore.com).mp3",
    "Dr.Alban – It's my life": "https://now.morsmusic.org/load/931821259/Dr_Alban_-_Its_My_Life_(musmore.com).mp3",
    "Modern Talking – One in a million": "https://now.morsmusic.org/load/1669141142/Modern_Talking_-_One_in_a_Million_(musmore.com).mp3",
    "Modern Talking – Don't give up": "https://now.morsmusic.org/load/2112845232/Modern_Talking_-_Dont_Give_Up_(musmore.com).mp3",
    "C.C. Catch – 'Cause you are young": "https://drivemusic.club/dl/kO2_lRHHgLPcN4mkP78T_Q/1676043601/download_music/2013/02/c.c.catch-cause-you-are-young.mp3",
    "ABBA – Gimme gimme gimme": "https://drivemusic.club/dl/r_cM_GWvsdTGiG_pi8xYDQ/1676043631/download_music/2021/03/abba-gimme-gimme-gimme-a-man-after-midnight.mp3",
    "Bad Boys Blue – You're a woman": "https://drivemusic.club/dl/Fi_NYymIt3oxupEsy8YpaQ/1676069113/download_music/2018/03/bad-boys-blue-you039re-a-woman.mp3",
    "Modern Talking – Brother Louie": "https://drivemusic.club/dl/ozYKGpoLM8CnzdvKZTuyLw/1676043708/download_music/2013/02/modern-talking-brother-louie.mp3",
    "Modern Talking – You can win if you want": "https://drivemusic.club/dl/nPK1gYHFNakcAEt3HfB5BA/1676043693/download_music/2019/03/modern-talking-you-can-win-if-you-want.mp3",
    "Modern Talking – Doctor for my heart": "https://now.morsmusic.org/load/1109660928/Modern_Talking_-_Doctor_for_My_Heart_(musmore.com).mp3",
    "Europe – The final countdown": "https://now.morsmusic.org/load/776575012/Europe_-_The_Final_Countdown_(musmore.com).mp3",
    "Rick Astley – Never gonna give you up": "https://now.morsmusic.org/load/347720718/Rick_Astley_Tribute_Band_-_Never_Gonna_Give_You_Up_(musmore.com).mp3",
    "Eurythmics – Sweet dreams": "https://now.morsmusic.org/load/1132554976/Eurythmics_Annie_Lennox_Dave_Stewart_-_Sweet_Dreams_Are_Made_of_This_(musmore.com).mp3"
};

var chillPlaylist = {
    
    "Plenka – Nightmare": "https://now.morsmusic.org/load/1449846272/plenka_-_Nightmare_(musmore.com).mp3",
    "Plenka – Closed": "https://now.morsmusic.org/load/297940494/plenka_-_Closed_(musmore.com).mp3",
    "Plenka – No": "https://now.morsmusic.org/load/747445245/plenka_-_No_(musmore.com).mp3",
    "Hensonn – Flare": "https://muzon-club.net/uploads/files/2022-11/hensonn-flare_456736542.mp3",
    "Martin Garrix – Animals": "https://mezzoforte.ru/s/artist/409392-martin_garrix_animals.mp3",
    "Daft Punk – Around the world": "https://mezzoforte.ru/s/daft_punk/around_the_world.mp3",
    
    "Plenka – Call me": "https://now.morsmusic.org/load/291481396/plenka_-_Call_Me_(musmore.com).mp3",

    "DKJ – Aces": "https://muzon-club.net/uploads/files/2022-10/aces-dkj_456239530.mp3",
    "ONIMXRU x STRAWANGLE – Psycho Cruise": "https://now.morsmusic.org/load/931801659/ONIMXRU_STRAWANGLE_-_PSYCHO_CRUISE_(musmore.com).mp3",
    
};

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

function chillPlaylistPlay() {
	if (endedPlaylist != chillPlaylist) {
		randomChillSong = chillPlaylist[selectRandom(chillPlaylist)];
	    endedPlaylist = chillPlaylist;
	
	    player.pause();
        player.src = randomChillSong;
        player.play();
    
        playingNow = getKeyByValue(endedPlaylist, randomChillSong)
	    playingNowText.textContent = playingNow;
	
	    delete chillPlaylist[playingNow]; 
	
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