export enum TabRoutes {
  FEED = "Feed",
  FAVORITE = "Favorite",
}

export enum StackRoutes {
  MAIN = "main",
  CHARACTER_SCREEN = "character_screen",
}

export type NavigationParamList = {
  [StackRoutes.MAIN]: undefined;
  [StackRoutes.CHARACTER_SCREEN]: {
    isLiked: boolean;
    characterUrl: string;
  };
};
