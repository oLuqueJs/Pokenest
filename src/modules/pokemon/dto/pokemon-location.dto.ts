import { LocationArea } from "../types/location/loc-area.type";
import { LocationVersionDetails } from "../types/location/loc-version-details.type";

export class PokemonLocationDTO {
  location_area: LocationArea;
  version_details: LocationVersionDetails[];

}