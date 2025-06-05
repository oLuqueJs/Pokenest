export type ItemFlavorText = {
  text: string;
  version_group: VersionGroup;
  language: Language;
}

type VersionGroup = {
  name: string;
  url: string;
}

type Language = {
  name: string;
  url: string;
}
