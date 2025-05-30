export type PokeItems = {
  item: PokeItem;
  version_details: VersionDetails[]
}

type PokeItem = {
  name: string;
}

type VersionDetails = {
  rarity: number
  version: PokeVersion
}

type PokeVersion = {
  name: string;
  url: string;
}