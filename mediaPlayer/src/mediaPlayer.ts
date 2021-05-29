
class mediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any> = [];
    container: HTMLElement;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this._initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    tooglePlay() {
        this.media.paused == true ? this.media.play() : this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    sound() {
        this.media.muted == true ? this.media.muted = false : this.media.muted = true;
    }
    addVolumen() {
        if (this.media.muted == true) {
            this.media.muted = false;
            this.media.volume += 0.25;
        } else {
            if (this.media.volume >= 1) {
                alert('limite del volumen');
            } else {
                this.media.volume += 0.25;
            }
        }

    }
    removeVolumen() {
        if (this.media.volume <= 0) {
            alert('No hay sonido, sube');
        } else {
            this.media.volume -= 0.25;
        }
    }
}

export default mediaPlayer;
