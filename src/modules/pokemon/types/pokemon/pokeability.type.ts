export type PokeAbilities = {
  ability: PokeAbility;
  is_hidden: boolean;
  slot: number;
}

type PokeAbility = {
  name: string;
  url: string;
}
