class autoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this);
        
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)

        document.addEventListener('visibilitychange', this.handleVisibiltyChange)
    }

    handleIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        console.log(isVisible)
        /*if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }*/
        isVisible ? this.player.play() : this.player.pause();

        //console.log(entry)
    };

    handleVisibiltyChange(){
        const isVisible = document.visibilityState == "hidden"
        !isVisible ? this.player.play() : this.player.pause();
    }
}

export default autoPause;