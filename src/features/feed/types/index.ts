export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  isLiked: boolean;
}

export type CharacterFromApi = Omit<Character, "isLiked">;

export interface GetCharactersPayload {
  path: string;
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "n/a",
}
