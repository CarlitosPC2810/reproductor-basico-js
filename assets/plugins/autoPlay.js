function AutoPlay() { }
AutoPlay.prototype.run = function (player) {
    //console.log('asdasdas' + player.muted)
    if (!player.muted) {
        player.media.volume = 0.25
        player.muted = true;
        player.play();
    }
    
};

export default AutoPlay;
