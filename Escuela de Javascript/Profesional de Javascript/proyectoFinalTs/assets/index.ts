import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads/index';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()]});

const buttonPlay: HTMLElement = document.getElementById('play_btn');
const buttonMute: HTMLElement = document.getElementById('mute_btn');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick= () => {
  if (player.media.muted) {
    player.unmute();
    buttonMute.innerText = "Mute";
  } else {
    player.mute();
    buttonMute.innerText = "Unmute";
  }
};

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
}