class BootState extends Phaser.State {
  preload() {
  }

  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.stage.smoothed = false;
    this.game.antialias = false;
    this.game.renderer.renderSession.roundPixels = true;

    this.state.start('play');
  }
}

export default BootState;