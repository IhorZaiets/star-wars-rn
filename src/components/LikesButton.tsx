import React, { FC } from "react";

import styled from "styled-components/native";

import LikeIconFilled from "../assets/like-icon-filled.svg";
import LikeIcon from "../assets/like-icon.svg";
import theme from "../theme";

interface LikesButtonProps {
  isLiked: boolean;
  onPress: () => void;
}

const LikesButton: FC<LikesButtonProps> = ({ isLiked, onPress }) => (
  <SLikesContainer onPress={onPress}>
    {isLiked ? (
      <LikeIconFilled fill={theme.colors.red} width={20} height={20} />
    ) : (
      <LikeIcon fill={theme.colors.red} width={20} height={20} />
    )}
  </SLikesContainer>
);

const SLikesContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export default LikesButton;
