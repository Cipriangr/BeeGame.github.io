export enum BeeType {
  QUEEN = "Queen",
  WORKER = "Workers",
  DRONE = "Drones"
}

export enum BeeTypeSingular {
  QUEEN = "Queen",
  WORKER = "Worker",
  DRONE = "Drone"
}

// Mapping from BeeType to BeeTypeSingular
export const BeeTypeMapping: Record<BeeType, BeeTypeSingular> = {
  [BeeType.QUEEN]: BeeTypeSingular.QUEEN,
  [BeeType.WORKER]: BeeTypeSingular.WORKER,
  [BeeType.DRONE]: BeeTypeSingular.DRONE
};

export const BeeHealth: Record<BeeType, number> = {
  [BeeType.QUEEN]: 100,
  [BeeType.WORKER]: 75,
  [BeeType.DRONE]: 50
};

export const BeeHitDamage: Record<BeeType, number> = {
  [BeeType.QUEEN]: 8,
  [BeeType.WORKER]: 10,
  [BeeType.DRONE]: 12
};

export interface Bee {
  id: number;
  type: BeeType;
  health: number;
  isAlive: boolean;
}

export interface Swarm {
  Queen: Bee[];
  Workers: Bee[];
  Drones: Bee[];
}

export enum AlertMessage {
  GAME_OVER = 'Game Over! No bees left to hit! The game will be restarted',
  QUEEN_DEAD = 'The Queen has died. All bees are dead. The game will restart',
  PLAYER_NAME_EMPTY = 'Please enter a player name to start the game',
}