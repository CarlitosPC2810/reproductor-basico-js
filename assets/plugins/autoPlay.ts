import mediaPlayer from '../mediaPlayer';

class AutoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        //console.log('asdasdas' + player.muted)
        if (!player.media.muted) {
            player.media.volume = 0.25;
            player.media.muted = true;
            player.play();
        }

    }
}

export default AutoPlay;
