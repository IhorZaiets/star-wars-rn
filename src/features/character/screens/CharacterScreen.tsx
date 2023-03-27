import React, { FC, useEffect, useState } from "react";
import { Platform, SafeAreaView } from "react-native";

import { RouteProp } from "@react-navigation/core";
import styled from "styled-components/native";

import LikesButton from "../../../components/LikesButton";
import Loader from "../../../components/Loader";
import { getCorrectPath } from "../../../helpers/getCorrectPath";
import { useAppDispatch } from "../../../store/helpers/storeHooks";
import theme from "../../../theme";
import { toggleLike } from "../../feed/modules";
import { useLazyGetCharacterQuery } from "../../feed/modules/api";
import { CharacterFromApi } from "../../feed/types";
import { useAppNavigation } from "../../navigation/NavigationService";
import { NavigationParamList, StackRoutes } from "../../navigation/types";
import BackArrow from "../assets/back-arrow.svg";
import AdditionalInfo from "../components/AdditionalInfo";

const isAndroid = Platform.OS === "android";

const CharacterScreen: FC<{
  route: RouteProp<NavigationParamList, StackRoutes.CHARACTER_SCREEN>;
}> = ({ route }) => {
  const { characterUrl, isLiked } = route.params;
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const [getCharacterQuery, { isLoading: isCharacterLoading }] =
    useLazyGetCharacterQuery();
  const [isCharacterLiked, setIsCharacterLiked] = useState(isLiked);
  const [character, setCharacter] = useState<CharacterFromApi | null>(null);

  useEffect(() => {
    const asyncQuery = async () => {
      const res = await getCharacterQuery({
        characterUrl: getCorrectPath(characterUrl),
      });

      res.data && setCharacter(res.data);
    };

    asyncQuery();
  }, [characterUrl, getCharacterQuery]);

  if (isCharacterLoading || !character) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <Header>
        <ArrowContainer onPress={() => navigation.goBack()}>
          <BackArrow color={theme.colors.black} />
        </ArrowContainer>
        <Name>{character.name}</Name>
        <LikesButton
          isLiked={isCharacterLiked}
          onPress={() => {
            setIsCharacterLiked((prevState) => !prevState);
            dispatch(toggleLike(character.url));
          }}
        />
      </Header>
      <AdditionalInfo {...character} />
    </SafeAreaView>
  );
};

const Header = styled.View`
  margin-top: ${isAndroid ? 40 : 10}px;
  padding-horizontal: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ArrowContainer = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;

const Name = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: ${theme.fontSizes.xl}px;
`;

export default CharacterScreen;
