import { Continents } from "../../shared/types";
import { createUseModuleTranslation } from "../../shared/utils";

export const MODULE_NAME = "root";
export const useModuleTranslation = createUseModuleTranslation(MODULE_NAME);
export const mappedContinents = {
  [Continents.Europe]: "european",
  [Continents.Africa]: "african",
  [Continents.Asia]: "asian",
  [Continents.NorthAmerica]: "north american",
  [Continents.SouthAmerica]: "south american",
  [Continents.CentralAmerica]: "central american",
  [Continents.Oceania]: "oceanian",
  [Continents.AllContinents]: "all continents",
};
