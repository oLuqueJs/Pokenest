export type SpeciesFlavorText = {
  flavor_text: string;
  language: languageInfo;
  version: versionInfo;
}

type languageInfo = {
  name: string;
  url: string;
}

type versionInfo = {
  name: string;
  url: string;
}
