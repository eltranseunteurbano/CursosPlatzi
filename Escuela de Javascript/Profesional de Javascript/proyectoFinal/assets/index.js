import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]});

const buttonPlay = document.getElementById('play_btn');
const buttonMute = document.getElementById('mute_btn');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick= () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};