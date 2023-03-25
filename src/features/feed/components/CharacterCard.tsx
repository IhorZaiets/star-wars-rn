import React, { FC } from "react";
import { Text } from "react-native";

import styled from "styled-components/native";

import theme from "../../../theme";
import { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => (
  <CardContainer key={character.url}>
    <CharacterName>{character.name}</CharacterName>
    <InfoContainer>
      <Text>Birth year: {character.birth_year}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Home: {character.homeworld}</Text>
      {!!character.species.length && <Text>Species: {character.species}</Text>}
    </InfoContainer>
  </CardContainer>
);

const CardContainer = styled.View`
  margin-top: 10px;
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
  font-size: ${theme.fontSizes.ll}px;
`;

const InfoContainer = styled.View``;

export default CharacterCard;
