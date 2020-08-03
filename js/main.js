var range_val = document.getElementById('text');
var flag = false;
function SetValue(id)
{
	var volume = document.getElementById(id);
	var myAudio = document.getElementById("myAudio"); 
	myAudio.volume = volume.value;
}

function conti() {
	var myAudio = document.getElementById("myAudio"); 
	if(flag){
		flag = false;
		var re = document.getElementById('replay');
		re.src = "images/replay.png";			
	}else{
		flag = true;
		var re = document.getElementById('replay');
		re.src = "images/re_play.png";			
	}
}

function back() {
	var myAudio = document.getElementById("myAudio"); 
	if (!myAudio.paused) {
		myAudio.pause();
		myAudio.currentTime = 0;
		myAudio.play(); 
	} 
}

function playPause(flag) { 
	var myAudio = document.getElementById("myAudio"); 
	var play = document.getElementById('play');
	if(flag == 1){
		if (myAudio.paused) {
			myAudio.play(); 
			play.src = "images/pause.png";
		} else { 
			myAudio.pause(); 
			play.src = "images/play.png";
		} 
	}else if(flag ==2){
		if (myAudio.played) {
			myAudio.pause(); 
		} 
	}else{
		myAudio.load();
		myAudio.volume = 0.5;
		myAudio.currentTime = 0;
		myAudio.play();
		play.src = "images/pause.png";
	}
}

	
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementById("close");                                          
var album = document.getElementById("album");
var audio = document.getElementById("audio");
var dic = {'again.mp3':'again', 'maria.mp3':'maria', 'aloha.mp3':'aloha', 'eight.mp3':'eight', 'secret.mp3':'secret', 'zico.mp3':'zico', 'fancy.mp3':'fancy', 'ha.mp3':'play', 'fiesta.mp3':'fiesta', 'hip.mp3':'hip'};
		
function playBtn(id){
	album.src = "images/"+dic[id]+"_d.png";
	audio.src = "music/"+dic[id]+".mp3";
	playPause(3);
	modal.style.display = "block";
}	

window.onclick = function(event) {
    if (event.target == modal) {
		playPause(2);
        modal.style.display = "none";
	}
}

function close() {
	playPause(2);
	modal.style.display = "none";
}
		
function init() {
	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
		var id = localStorage.getItem(localStorage.key( i ));
		document.getElementById(id).src = "images/heart.png";				
	}
}
		
function heartBtn(id){	
	var value = document.getElementById(id).src;
	if(value == "https://gayeonland.site/GayeonMusic/images/heart.png"){
		document.getElementById(id).src = "images/heart_e.png";
		localStorage.removeItem(id);
	}else{
		document.getElementById(id).src = "images/heart.png";
		localStorage.setItem(id, id+"");
	}
	/*
	if(value == "file:///C:/Users/rkdus/Desktop/GayeonMusic/images/heart.png"){
		document.getElementById(id).src = "images/heart_e.png";
		localStorage.removeItem(id);
	}else{
		document.getElementById(id).src = "images/heart.png";
		localStorage.setItem(id, id+"");
	}*/
}
		
		
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
          height: '100%',
          width: '100%',
          videoId: 'ESKfHHtiSjs',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
		  }
	});
		
	player = new YT.Player('player2', {
          height: '100%',
          width: '100%',
          videoId: 'tDukIfFzX18',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
	});
		
	player = new YT.Player('player3', {
          height: '100%',
          width: '100%',
          videoId: '3DOkxQ3HDXE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
	});

	player = new YT.Player('player4', {
          height: '100%',
          width: '100%',
          videoId: 'BhutuEkDlyk',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
	});
		
	player = new YT.Player('player5', {
          height: '100%',
          width: '100%',
          videoId: 'QIN5_tJRiyY',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
	});
}

function click(){
	alert("등록되었습니다");
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	//event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
	}
}
   
function stopVideo() {
	player.stopVideo();
}
