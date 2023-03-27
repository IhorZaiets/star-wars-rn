import LikeIcon from "../../../assets/like-icon.svg";
import FeedIcon from "../assets/feed-icon.svg";
import { TabRoutes } from "../types";

export const getTabBarIcon = (routeName: string) => {
  switch (routeName) {
    case TabRoutes.FAVORITE: {
      return LikeIcon;
    }
    case TabRoutes.FEED: {
      return FeedIcon;
    }
    default: {
      return FeedIcon;
    }
  }
};
