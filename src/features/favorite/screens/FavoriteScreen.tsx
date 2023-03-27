import React, { FC } from "react";
import { FlatList, ListRenderItem, Platform } from "react-native";

import styled from "styled-components/native";

import Button from "../../../components/Button";
import EmptyList from "../../../components/EmptyList";
import ItemSeparatorComponent from "../../../components/ItemSeparatorComponent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/helpers/storeHooks";
import theme from "../../../theme";
import CharacterCard from "../../feed/components/CharacterCard";
import { resetLikes } from "../../feed/modules";
import { getFavoriteCharacters } from "../../feed/modules/selectors";
import { Character, Gender } from "../../feed/types";
import GenderStatistics from "../components/GenderStatistics";

const isAndroid = Platform.OS === "android";

const FavoriteScreen: FC = () => {
  const dispatch = useAppDispatch();
  const favoriteCharacters = useAppSelector(getFavoriteCharacters);

  const renderItem: ListRenderItem<Character> = ({ item }) => (
    <CharacterCard character={item} />
  );

  const handleReset = () => {
    dispatch(resetLikes());
  };

  return (
    <SSafeAreaView>
      <SText>List of your favorite characters</SText>
      <GenderStatisticsContainer>
        <GenderStatistics gender={Gender.MALE} />
        <GenderStatistics gender={Gender.FEMALE} />
        <GenderStatistics gender={Gender.OTHER} />
      </GenderStatisticsContainer>
      <FlatList
        data={favoriteCharacters}
        renderItem={renderItem}
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 16,
          paddingTop: isAndroid ? 40 : 10,
          minHeight: "100%",
        }}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={<EmptyList />}
      />
      <ButtonContainer>
        <Button label="Reset" onPress={handleReset} />
      </ButtonContainer>
    </SSafeAreaView>
  );
};

const SSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const GenderStatisticsContainer = styled.View`
  margin-top: 20px;
  padding-horizontal: 16px;
  gap: 10px;
`;

const SText = styled.Text`
  font-size: ${theme.fontSizes.xl}px;
  text-align: center;
  margin-top: ${isAndroid ? 40 : 10}px;
  font-weight: 600;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding-horizontal: 16px;
`;

export default FavoriteScreen;
