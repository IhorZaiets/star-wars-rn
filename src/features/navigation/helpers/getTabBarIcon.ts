import FeedIcon from "../assets/feed-icon.svg";
import LikeIcon from "../assets/like-icon.svg";
import { Routes } from "../types";

export const getTabBarIcon = (routeName: string) => {
  switch (routeName) {
    case Routes.FAVORITE: {
      return LikeIcon;
    }
    case Routes.FEED: {
      return FeedIcon;
    }
    default: {
      return FeedIcon;
    }
  }
};
