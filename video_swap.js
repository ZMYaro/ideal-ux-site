'use strict';

var HIDDEN_CLASS = 'hidden';

var currentVideo,
	otherVideo;

window.addEventListener('load', function () {
	currentVideo = document.getElementById('video-desktop');
	otherVideo = document.getElementById('video-mobile');
	
	currentVideo.addEventListener('ended', swapPlayers);
	otherVideo.addEventListener('ended', swapPlayers);
	
	currentVideo.play();
});

function swapPlayers() {
	currentVideo.classList.add('hidden');
	otherVideo.classList.remove('hidden');
	otherVideo.play();
	
	var temp = currentVideo;
	currentVideo = otherVideo;
	otherVideo = temp;
}
