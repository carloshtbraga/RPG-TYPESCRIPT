import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  player:Fighter;
  enemy: Fighter[] | SimpleFighter[];

  constructor(player:Fighter, enemy:Fighter[] | SimpleFighter[]) {
    super(player);
    this.player = player;
    this.enemy = enemy;
  }

  override fight(): number {
    this.enemy.forEach((e) => {
      while (this.player.lifePoints !== -1 && e.lifePoints !== -1) {
        this.player.attack(e);
        e.attack(this.player);
      }
    });
    return super.fight();
  }
}

export default PVE;