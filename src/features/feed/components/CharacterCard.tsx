import React, { FC } from "react";
import { Text } from "react-native";

import styled from "styled-components/native";

import LikesButton from "../../../components/LikesButton";
import { useAppDispatch } from "../../../store/helpers/storeHooks";
import theme from "../../../theme";
import { useAppNavigation } from "../../navigation/NavigationService";
import { StackRoutes } from "../../navigation/types";
import { toggleLike } from "../modules";
import { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  return (
    <CardContainer
      key={character.url}
      onPress={() =>
        navigation.navigate(StackRoutes.CHARACTER_SCREEN, {
          isLiked: character.isLiked,
          characterUrl: character.url,
        })
      }
    >
      <CharacterName>{character.name}</CharacterName>
      <Text>Birth year: {character.birth_year}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Mass: {character.mass}kg</Text>
      <LikeContainer>
        <LikesButton
          isLiked={character.isLiked}
          onPress={() => {
            dispatch(toggleLike(character.url));
          }}
        />
      </LikeContainer>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  width: 100%;
  padding-horizontal: 16px;
  padding-vertical: 14px;
  border-radius: 14px;
  background-color: ${theme.colors.white};
  elevation: 30;
  shadow-color: ${theme.colors.black};
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  shadow-offset: 0 -2px;
`;

const CharacterName = styled.Text`
  font-size: ${theme.fontSizes.l}px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const LikeContainer = styled.View`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export default CharacterCard;
