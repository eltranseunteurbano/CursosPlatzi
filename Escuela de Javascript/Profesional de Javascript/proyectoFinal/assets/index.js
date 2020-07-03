import MediaPlayer from './MediaPlayer.js.js.js';
import AutoPlay from './plugins/AutoPlay.js.js.js';
import AutoPause from './plugins/AutoPause.js.js.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()]});

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

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
}