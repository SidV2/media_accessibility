const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');
const player = document.querySelector('video');

// remove native controls from video player
player.removeAttribute('controls');

//play pause button click handler
playPauseBtn.onclick = function() {
    if(player.paused) {
      player.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      player.pause();
      playPauseBtn.textContent = 'Play';
    }
};

//stop button click handler
stopBtn.onclick = function() {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = 'Play';
};

//rewind button click handler
rwdBtn.onclick = function() {
    player.currentTime -= 3;
};

//forward button click handler
fwdBtn.onclick = function() {
    player.currentTime += 3;
    if(player.currentTime >= player.duration || player.paused) {
      player.pause();
      player.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    }
};

//time elapsed handler
player.ontimeupdate = function () {
    const minutes = Math.floor(player.currentTime / 60);
    const seconds = Math.floor(player.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
  
    if (minutes < 10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds < 10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }
  
    const mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
  };
