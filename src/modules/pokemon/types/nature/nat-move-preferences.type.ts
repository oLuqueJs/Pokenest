export type NatureMovePreferences = {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: BattleStyle
}


type BattleStyle = {
  name: string;
  url: string;
}
