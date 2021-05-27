import mediaPlayer from './mediaPlayer.js';
import autoplay from './plugins/autoPlay.js'
import autoPause from './plugins/autoPause.js'

const video = document.querySelector('video')
const buttonPlay = document.querySelector('#playButton')
const buttonMuted = document.querySelector('#muteButton')
const addVolumen = document.querySelector('#addVolumen')
const removeVolumen = document.querySelector('#removeVolumen')

const player = new mediaPlayer(
    {
        el: video,
        plugins: [
            new autoplay,
            new autoPause
        ]
    });
console.log(player)
buttonPlay.onclick = () => {
    player.tooglePlay();
}

buttonMuted.onclick = function () {
    player.sound();
}

addVolumen.onclick = () => {
    player.addVolumen()
    console.log(player.media.volume)
}
removeVolumen.onclick = () => {
    player.removeVolumen();
    console.log(player.media.volume)
}

if ('serviceWorker' in navigator) {
    console.log('si sirve')
    navigator
        .serviceWorker
        .register('/sw.js').catch(error => {
            console.error(error.message);
        })
}
