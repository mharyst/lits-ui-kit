//Screen size
// window.onload = adaptive;
// window.onresize = adaptive;
//
// function adaptive() {
//   var w = window.innerWidth;
//   var mainFontSize = Math.floor((w * 0.125) * 0.1);
//   var htmlTag = document.querySelector('html');
//   htmlTag.style = 'font-size: ' + mainFontSize + 'px;';
// }


//Open/Close dropdown
document.querySelector('.dropbtn').addEventListener('click', function () {
  document.querySelector('.dropdown').classList.toggle('active');
});

//Slider 1 functionality
function sliderChange(value) {
  rangevalue.value = value;
  rangevalue.style = 'left:' + value + '%;';
}
function sliderChange2(value) {
  rangevalue2.value = value;
  rangevalue2.style = 'left:' + value + '%;';
}
//End Slider 1

//Video functionality buttons

var supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
  var videoContainer = document.getElementById('videoContainer');
  var video = document.querySelector('video');
  var videoControls = document.getElementById('videoControls');

  // Hide the default controls
  video.controls = false;

  // Display the user defined video controls
  videoControls.style.display = 'block';

  //Button variables
  var playpause = document.getElementById('playpause');
  var mute = document.getElementById('mute');
  var progress = document.getElementById('progress');
  var progressBar = document.getElementById('progress-bar');
  var fullscreen = document.getElementById('fs');
  playpause.addEventListener('click', function(e) {
    if (video.paused || video.ended) video.play();
    else video.pause();
  });

  mute.addEventListener('click', function(e) {
    video.muted = !video.muted;
    console.log(video.currentTime);
  });

  video.addEventListener('timeupdate', function() {
    video.style = 'background: #000; height: 100%;';
    var currentTime = Math.floor((video.currentTime / video.duration) * 100);
    var currentLoad = Math.floor(((video.buffered.end(0) / video.duration) * 100) + 10);
    progress.style = 'left: ' + currentTime + '%;';
    progressBar.style = 'width: ' + currentLoad + '%; height: 100%;';
  });

  //Fullscreen
  var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

  fs.addEventListener('click', function(e) {
    handleFullscreen();
  });

  var handleFullscreen = function() {
   if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
   }
   else {
      if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
      else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
      else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
      setFullscreenData(true);
      video.style = 'height: 100%;';
      videoControls.style = 'background-color: rgba(0,0,0,0.6);';
   }
}
  var isFullScreen = function() {
     return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
  }
  var setFullscreenData = function(state) {
     videoContainer.setAttribute('data-fullscreen', !!state);
  }
  document.addEventListener('fullscreenchange', function(e) {
     setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
  });
  document.addEventListener('webkitfullscreenchange', function() {
     setFullscreenData(!!document.webkitIsFullScreen);
  });
  document.addEventListener('mozfullscreenchange', function() {
     setFullscreenData(!!document.mozFullScreen);
  });
  document.addEventListener('msfullscreenchange', function() {
     setFullscreenData(!!document.msFullscreenElement);
  });
  //End fullscreen
}
