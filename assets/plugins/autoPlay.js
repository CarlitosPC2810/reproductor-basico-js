function autoPlay() { }

autoPlay.prototype.run = function (player) {
    player.media.volume = 0.0;
    player.mute();
    player.play();
}

export default autoPlay;