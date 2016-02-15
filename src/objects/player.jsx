class Player extends Phaser.Sprite {
  constructor(state, x, y) {
    super(state.game, x, y, 'player');
  }
}

export default Player;