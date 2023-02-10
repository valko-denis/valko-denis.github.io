var player = document.getElementById("player");
var playPauseButton = document.getElementsByClassName("fa-circle-play");           
var selection = null;
var endedPlaylist = null;
player.volume = 1;

var classicPlaylist = [
    "https://drivemusic.club/dl/p-TFbzsyhISer7R5e2DhYQ/1676069591/download_music/2021/12/domi-lights-off.mp3",
    "https://drivemusic.club/dl/BP7JKIu88Nh_SrRvcAX_KQ/1676036929/download_music/2014/07/onerepublic-counting-stars.mp3",
    "https://drivemusic.club/dl/CcqHplTLsR01PLbbiRBjIA/1676036960/download_music/2014/07/eminem-superman.mp3",
    "https://drivemusic.club/dl/RprZeLK8XXnZEyaHV4JdRw/1676043487/download_music/2020/10/nirvana-smells-like-teen-spirit.mp3",
    "https://drivemusic.club/dl/sz9pmJL3MVkYGkSlZvd_Mg/1676042690/download_music/2013/12/milky-chance-stolen-dance.mp3",
    "https://drivemusic.club/dl/4-zCxU9p3b9K1Y9Jnjgm5A/1676043024/download_music/2015/03/major-lazer-feat.-mo-dj-snake-lean-on.mp3",
    "https://drivemusic.club/dl/8e8Ju2j18WQ26KXmKVzQWg/1676068952/download_music/2020/03/michael-jackson-billie-jean.mp3",
    "https://drivemusic.club/dl/e9Yqsvb2c7_icnFrfxPPxg/1676069031/download_music/2014/10/calvin-harris-feat.-ellie-goulding-outside.mp3",
    "https://drivemusic.club/dl/NNLXx8oBm3XIwSBEdvMtAg/1676069054/download_music/2014/07/adele-rolling-in-the-deep.mp3",
    "https://drivemusic.club/dl/i1pI9wtEO8dK6PkqkxfSOw/1676042609/download_music/2015/11/major-lazer-feat.-nyla-fuse-dg-light-it-up-remix.mp3",
    "https://drivemusic.club/dl/HzadP-Zv4pjUemk39RX57A/1676042645/download_music/2014/01/aaron-smith-dancin-krono-remix.mp3",
    "https://drivemusic.club/dl/qmYWrc0R_IjYzbNJGnk2ww/1676043228/download_music/2015/05/twenty-one-pilots-stressed-out.mp3",
    "https://drivemusic.club/dl/0WyKaoCeTc9ux-of587Hqg/1676043261/download_music/2017/03/portugal.-the-man-feel-it-still.mp3",
    "https://drivemusic.club/dl/1ev2biOZmP65QrnNOTsLeA/1676043288/download_music/2013/10/vance-joy-riptide.mp3",
    "https://drivemusic.club/dl/E8T0h4zsNiDCMXdorUQGYw/1676069143/download_music/2014/07/katy-perry-i-kissed-a-girl.mp3",
    "https://drivemusic.club/dl/uDEKrd8lh9mVvdfKnrwx4w/1676069381/download_music/2022/05/onerepublic-i-aint-worried.mp3",
    "https://drivemusic.club/dl/WyfsDSp0K2BHzQKIuJtDpw/1676069425/download_music/2015/11/coldplay-feat.-beyonce-hymn-for-the-weekend.mp3",
    "https://drivemusic.club/dl/0_lGxPs7lAvaeF_czqTvjA/1676036988/download_music/2014/06/lilly-wood-the-prick-feat.-robin-schulz-prayer-in-c.mp3",
    "https://drivemusic.club/dl/lvvIAhb7kJUea5abEhQm1Q/1676043378/download_music/2019/11/the-weeknd-blinding-lights.mp3",
    "https://drivemusic.club/dl/8aBJvBX9-iaaZgDtYPuxYg/1676043400/download_music/2016/06/twenty-one-pilots-heathens.mp3",
    "https://drivemusic.club/dl/N0fpZSR6omoesrrswAx2dg/1676043415/download_music/2015/09/dnce-cake-by-the-ocean.mp3",
    "https://drivemusic.club/dl/4SFnpcJO2ae5UbxBEwbhCw/1676043437/download_music/2017/04/dnce-feat.-nicki-minaj-kissing-strangers.mp3",
    "https://drivemusic.club/dl/nRJSJOLzb0uvdfQsR7reKA/1676043474/download_music/2014/02/linkin-park-numb.mp3",
    "https://drivemusic.club/dl/ZUpTmt5JvI6cNNnLEGQB9g/1676043872/download_music/2022/09/sam-smith-feat.-kim-petras-unholy.mp3",
    "https://drivemusic.club/dl/i05OsdmwDfPGA_u5m8vekA/1676043895/download_music/2014/07/eminem-mockingbird.mp3",
    "https://drivemusic.club/dl/k3Rx8Ti-NHMBQI9lVKQ3rg/1676043966/download_music/2014/07/the-black-eyed-peas-pump-it.mp3",
    "https://drivemusic.club/dl/oaQgsrNBjshvaISaq-xgTA/1676044003/download_music/2018/03/mgmt-little-dark-age.mp3",
    "https://drivemusic.club/dl/lBYECS_NplyPZp92Vuj8yA/1676044028/download_music/2013/06/martin-garrix-animals-original-mix.mp3",
    "https://drivemusic.club/dl/v-blfymj8IFGDERAlxmbVA/1676044047/download_music/2014/07/gotye-somebody-that-i-used-to-know.mp3",
    "https://drivemusic.club/dl/bS1Q6frKWAHtJZ6YU_Y4bw/1676044067/download_music/2013/12/morandi-angels.mp3",
    "https://drivemusic.club/dl/xsH7_YhkjLSyBoAfblY3gA/1676044113/download_music/2019/04/lil-nas-x-old-town-road.mp3",
    "https://drivemusic.club/dl/cCAaghDCwf8GE1Ndxo66mw/1676044176/download_music/2021/07/lil-nas-x-feat.-jack-harlow-industry-baby.mp3",
    "https://drivemusic.club/dl/XQ2oMdlH2fRuwF_2qTeAGg/1676042666/download_music/2011/06/lmfao-sexy-and-i-know-it.mp3",
    "https://muzon-club.net/uploads/files/2023-02/naughty-boyampsam-smith-lalala_244530658.mp3"
];

var oldPlaylist = [
    "https://drivemusic.club/dl/jCqPh1NdqViYEGeaoXFDxQ/1676043569/download_music/2016/12/desireless-voyage-voyage.mp3",
    "https://drivemusic.club/dl/kO2_lRHHgLPcN4mkP78T_Q/1676043601/download_music/2013/02/c.c.catch-cause-you-are-young.mp3",
    "https://drivemusic.club/dl/r_cM_GWvsdTGiG_pi8xYDQ/1676043631/download_music/2021/03/abba-gimme-gimme-gimme-a-man-after-midnight.mp3",
    "https://drivemusic.club/dl/Fi_NYymIt3oxupEsy8YpaQ/1676069113/download_music/2018/03/bad-boys-blue-you039re-a-woman.mp3",
    "https://drivemusic.club/dl/ozYKGpoLM8CnzdvKZTuyLw/1676043708/download_music/2013/02/modern-talking-brother-louie.mp3",
    "https://drivemusic.club/dl/nPK1gYHFNakcAEt3HfB5BA/1676043693/download_music/2019/03/modern-talking-you-can-win-if-you-want.mp3",
    "https://drivemusic.club/dl/ERMAIT_JrprMBgLWikwB8Q/1676043726/download_music/2019/09/modern-talking-geronimos-cadillac-long-vocal-version.mp3",
    "https://drivemusic.club/dl/xiwBMFUf9hamk1njX6kwnw/1676069097/download_music/2013/02/modern-talking-youre-my-heart-youre-my-soul.mp3",
    "https://now.morsmusic.org/load/155547581/Modern_Talking_-_Cheri_Cheri_Lady_(musmore.com).mp3",
    "https://now.morsmusic.org/load/2076887940/Modern_Talking_-_Do_You_Wanna_(musmore.com).mp3",
    "https://now.morsmusic.org/load/722746777/Modern_Talking_-_In_100_Years_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1669141142/Modern_Talking_-_One_in_a_Million_(musmore.com).mp3",
    "https://now.morsmusic.org/load/2112845232/Modern_Talking_-_Dont_Give_Up_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1109660928/Modern_Talking_-_Doctor_for_My_Heart_(musmore.com).mp3",
    "https://now.morsmusic.org/load/776575012/Europe_-_The_Final_Countdown_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1854281736/Bon_Jovi_-_Livin_On_A_Prayer_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1737797712/Bon_Jovi_-_Its_My_Life_(musmore.com).mp3",
    "https://now.morsmusic.org/load/16686339/Haddaway_-_What_Is_Love_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1924795295/Joy_-_Touch_By_Touch_(musmore.com).mp3",
    "https://now.morsmusic.org/load/931821259/Dr_Alban_-_Its_My_Life_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1132554976/Eurythmics_Annie_Lennox_Dave_Stewart_-_Sweet_Dreams_Are_Made_of_This_(musmore.com).mp3"
];

var chillPlaylist = [
    "https://muzon-club.net/uploads/files/2022-08/interworld-metamorphosis_105897757.mp3",
    "https://now.morsmusic.org/load/1449846272/plenka_-_Nightmare_(musmore.com).mp3",
    "https://muzew.com/uploads/music/2021/12/My_Ordinary_Life_The_Living_Tombstone.mp3",
    "https://now.morsmusic.org/load/1021497721/Liue_-_Suffer_With_Me_(musmore.com).mp3",
    "https://mp3bob.ru/download/muz/Meg_Myers_-_Desire_(Hucci_Remix)_[mp3pulse.ru].mp3",
    "https://now.morsmusic.org/load/297940494/plenka_-_Closed_(musmore.com).mp3",
    "https://now.morsmusic.org/load/747445245/plenka_-_No_(musmore.com).mp3",
    "https://now.morsmusic.org/load/1093405264/Tony_Igy_-_Astronomia_(musmore.com).mp3",
    "https://muzon-club.net/uploads/files/2022-11/hensonn-flare_456736542.mp3",
    "https://mezzoforte.ru/s/artist/409392-martin_garrix_animals.mp3",
    "https://muzon-club.net/uploads/files/2021-11/mr.kitty-after-dark_456239972.mp3",
    "https://now.morsmusic.org/load/291481396/plenka_-_Call_Me_(musmore.com).mp3",
    "https://now.morsmusic.org/load/577266210/Dxrk_-_RAVE_(musmore.com).mp3",
    "https://mezzoforte.ru/s/artist/350321-robert_miles_fable_dream_version.mp3",
    "https://mezzoforte.ru/s/artist/445264-robert_miles_children_dream_version.mp3",
    "https://now.morsmusic.org/load/651074907/SadSvit_STRUKTURA_SHHASTYA_-_Silueti_(musmore.com).mp3"
];

function selectRandom(station){
	selection = Math.floor(Math.random() * station.length);
    player.src = station[selection];
    player.play();
    
    const removeSong = station.indexOf(selection);
    station.splice(removeSong, 1); 
}
    
function classicPlay() {
	player.pause();
	selectRandom(classicPlaylist);
	endedPlaylist = classicPlaylist;
	document.getElementById("button").classList.remove("fa-circle-play");
	document.getElementById("button").classList.add("fa-circle-pause");
	document.getElementById("play-button").setAttribute("onclick", "togglePlay()")
}

function oldPlay() {
	player.pause();
	selectRandom(oldPlaylist);
	endedPlaylist = oldPlaylist;
	document.getElementById("button").classList.remove("fa-circle-play");
	document.getElementById("button").classList.add("fa-circle-pause");
	document.getElementById("play-button").setAttribute("onclick", "togglePlay()")
}

function chillPlay() {
	player.pause();
	selectRandom(chillPlaylist);
	endedPlaylist = chillPlaylist;
	document.getElementById("button").classList.remove("fa-circle-play");
	document.getElementById("button").classList.add("fa-circle-pause");
	document.getElementById("play-button").setAttribute("onclick", "togglePlay()")
}
    
function firstPlay() {
	selectRandom(classicPlaylist);
	endedPlaylist = classicPlaylist;
	document.getElementById("button").classList.remove("fa-circle-play");
	document.getElementById("button").classList.add("fa-circle-pause");
	document.getElementById("play-button").setAttribute("onclick", "togglePlay()")
}
    
function togglePlay() {
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

player.addEventListener('ended',function(){
	selectRandom(endedPlaylist);
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
