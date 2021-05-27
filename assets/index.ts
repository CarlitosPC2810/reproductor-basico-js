import mediaPlayer from './mediaPlayer';
import autoplay from './plugins/autoPlay'
import autoPause from './plugins/autoPause'

const video = document.querySelector('video')
const buttonPlay: HTMLElement = document.querySelector('#playButton')
const buttonMuted: HTMLElement = document.querySelector('#muteButton')
const addVolumen: HTMLElement = document.querySelector('#addVolumen')
const removeVolumen: HTMLElement = document.querySelector('#removeVolumen')

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
