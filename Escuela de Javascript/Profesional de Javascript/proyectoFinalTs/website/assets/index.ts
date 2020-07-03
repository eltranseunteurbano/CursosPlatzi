import MediaPlayer from '@eltranseunteurbano/platzimediaplayer';
import AutoPlay from '@eltranseunteurbano/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@eltranseunteurbano/platzimediaplayer/lib/plugins/Autopause';
import Ads from '@eltranseunteurbano/platzimediaplayer/lib/plugins/Ads';

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