import React, { FC, useEffect } from "react";
import { Platform, FlatList, ListRenderItem, SafeAreaView } from "react-native";

import styled from "styled-components/native";

import ItemSeparatorComponent from "../../../components/ItemSeparatorComponent";
import Loader from "../../../components/Loader";
import { getCorrectPath } from "../../../helpers/getCorrectPath";
import { useAppSelector } from "../../../store/helpers/storeHooks";
import theme from "../../../theme";
import CharacterCard from "../components/CharacterCard";
import { useLazyGetCharactersQuery } from "../modules/api";
import { getCharactersPage } from "../modules/selectors";
import { Character } from "../types";

const isAndroid = Platform.OS === "android";

const FeedScreen: FC = () => {
  const charactersPage = useAppSelector(getCharactersPage);

  const [getCharacters, { isLoading: isCharactersLoading }] =
    useLazyGetCharactersQuery();

  useEffect(() => {
    getCharacters({ path: "people" });
  }, [getCharacters]);

  if (isCharactersLoading || !charactersPage?.results) {
    return <Loader />;
  }

  const renderItem: ListRenderItem<Character> = ({ item }) => (
    <CharacterCard character={item} />
  );

  return (
    <StyledSafeArea>
      <SText>List of Star Wars characters</SText>
      <FlatList
        data={charactersPage.results}
        renderItem={renderItem}
        onEndReached={({ distanceFromEnd }: { distanceFromEnd: number }) => {
          if (distanceFromEnd === 0) return;
          //as we receive full url in charactersPage.next, we replace the main part with
          //an empty string
          charactersPage.next &&
            getCharacters({
              path: getCorrectPath(charactersPage.next),
            });
        }}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </StyledSafeArea>
  );
};

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SText = styled.Text`
  font-size: ${theme.fontSizes.xl}px;
  text-align: center;
  margin-top: ${isAndroid ? 40 : 10}px;
  font-weight: 600;
`;

export default FeedScreen;
