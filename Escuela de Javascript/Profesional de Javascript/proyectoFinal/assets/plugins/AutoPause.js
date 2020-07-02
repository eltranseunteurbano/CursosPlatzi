class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this)
  }
  run(player) {
    this.player = player;
    const config = { threshold: this.threshold,}
    const observer = new IntersectionObserver(this.handleIntersection, config)
    observer.observe(this.player.media)
  }

  handleIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    isVisible ? this.player.play() : this.player.pause();
    console.log(entry, isVisible)
  }
}
export default AutoPause;