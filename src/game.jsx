import BootState from './states/boot.jsx';
import PlayState from './states/play.jsx';

class Game extends Phaser.Game {
  constructor() {
    super(480, 320, Phaser.AUTO, 'game');
    window.game = this;

    this.state.add('boot', BootState);
    this.state.add('play', PlayState);

    this.state.start('boot');
  }
}

new Game();
