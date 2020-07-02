import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  player: MediaPlayer

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player: MediaPlayer) {
    this.player = player;
    const config = { threshold: this.threshold,}
    const observer = new IntersectionObserver(this.handleIntersection, config)
    observer.observe(this.player.media)

    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    isVisible ? this.player.play() : this.player.pause();
    console.log(entry, isVisible)
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible"
    isVisible ? this.player.play() : this.player.pause();
  }
}
export default AutoPause;