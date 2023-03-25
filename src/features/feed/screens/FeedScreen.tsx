import React, { FC, useEffect } from "react";
import { FlatList, ListRenderItem, SafeAreaView, Text } from "react-native";

import { useAppSelector } from "../../../store/helpers/storeHooks";
import CharacterCard from "../components/CharacterCard";
import { useLazyGetCharactersQuery } from "../modules/api";
import { getCharactersPage } from "../modules/selectors";
import { Character } from "../types";

const FeedScreen: FC = () => {
  const charactersPage = useAppSelector(getCharactersPage);

  const [getCharacters, { isLoading: isCharactersLoading }] =
    useLazyGetCharactersQuery();

  console.log(charactersPage?.results);

  useEffect(() => {
    getCharacters({ path: "people" });
  }, [getCharacters]);

  if (isCharactersLoading || !charactersPage?.results) {
    return <Text>Loading</Text>;
  }

  const renderItem: ListRenderItem<Character> = ({ item }) => (
    <CharacterCard character={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={charactersPage.results}
        renderItem={renderItem}
        style={{
          padding: 16,
        }}
        onEndReached={({ distanceFromEnd }: { distanceFromEnd: number }) => {
          if (distanceFromEnd === 0) return;
          //as we receive full url in charactersPage.next, we replace the main part with
          //an empty string
          charactersPage.next &&
            getCharacters({
              path: charactersPage.next.replace("https://swapi.dev/api/", ""),
            });
        }}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
