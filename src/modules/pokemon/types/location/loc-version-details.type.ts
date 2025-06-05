export type LocationVersionDetails = {
  max_chance: number;
  encounter_details: encounter[];
  version: versionInfo;
}

type encounter = {
  min_level: number;
  max_level: number;
  condition_values: condition[]
  chance: number;
  method: methodInfo;
}

type condition = {
  name: string;
  url: string;
}

type methodInfo = {
  name: string;
  url: string;
}

type versionInfo = {
  name: string;
  url: string;
}