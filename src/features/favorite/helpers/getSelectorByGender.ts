import {
  getNumberOfFavoriteFemales,
  getNumberOfFavoriteMales,
  getNumberOfOtherFavorite,
} from "../../feed/modules/selectors";
import { Gender } from "../../feed/types";

export const getSelectorByGender = (gender: Gender) => {
  switch (gender) {
    case Gender.FEMALE:
      return getNumberOfFavoriteFemales;
    case Gender.MALE:
      return getNumberOfFavoriteMales;
    default:
      return getNumberOfOtherFavorite;
  }
};
