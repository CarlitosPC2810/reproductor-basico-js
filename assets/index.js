import mediaPlayer from './mediaPlayer.js';
import autoplay from './plugins/autoPlay.js'

const video = document.querySelector('video')
const buttonPlay = document.querySelector('#playButton')
const buttonMuted = document.querySelector('#muteButton')
const addVolumen = document.querySelector('#addVolumen')
const removeVolumen = document.querySelector('#removeVolumen')

const miNombre = {
    nombre:'Carlos Manuel',
    apellidos: 'Perez Carrizal'
};
console.log(`Buen dia ${miNombre.nombre} ${miNombre.apellidos}`);

const player = new mediaPlayer({ el: video, plugins: [new autoplay] });
console.log(player)
buttonPlay.onclick = () => {
    player.tooglePlay();
}

buttonMuted.onclick = function () {
    player.sound();
}

addVolumen.onclick = () =>{
    player.addVolumen()
    console.log(player.media.volume)
}
removeVolumen.onclick = () =>{
    player.removeVolumen();
    console.log(player.media.volume)
}
