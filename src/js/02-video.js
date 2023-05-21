import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);
player.on('timeupdate', throttle(saveLineSegmentOfVideo, 1000));

const currentTime = localStorage.getItem(VIDEO_CURRENT_TIME);
if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}

function saveLineSegmentOfVideo(data) {
  localStorage.setItem(VIDEO_CURRENT_TIME, data.seconds);
}
