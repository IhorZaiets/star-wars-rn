import React, { FC } from "react";

import styled from "styled-components/native";

import theme from "../theme";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ label, onPress }) => (
  <StyledTouchableOpacity onPress={onPress}>
    <Label>{label}</Label>
  </StyledTouchableOpacity>
);

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 12px;
  border-radius: 100px;
  background-color: ${theme.colors.brightBlue};
`;

const Label = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: ${theme.fontSizes.l}px;
  color: ${theme.colors.white};
`;

export default Button;
