
function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach((plugin) => {
        plugin.run(this);
    });
};

mediaPlayer.prototype.play = function () {
    this.media.play();
};

mediaPlayer.prototype.pause = function () {
    this.media.pause();
};

mediaPlayer.prototype.tooglePlay = function () {
    this.media.paused == true ? this.media.play() : this.media.pause();
};

mediaPlayer.prototype.mute = function () {
    this.media.muted = true;
};

mediaPlayer.prototype.sound = function () {
    this.media.muted == true ? this.media.muted = false : this.media.muted = true;
};

mediaPlayer.prototype.addVolumen = function () {
    if(this.media.muted == true){
        this.media.muted = false
        this.media.volume += 0.25
    }else{
        if(this.media.volume >= 1){
            alert('limite del volumen')
        }else{
            this.media.volume += 0.25    
        }
    }
    
};

mediaPlayer.prototype.removeVolumen = function () {
    if (this.media.volume <= 0) {
        alert('no hay sonido, sube')
    } else {
        this.media.volume -= 0.25
    }
}

export default mediaPlayer;
