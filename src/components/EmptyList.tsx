import React, { FC } from "react";

import styled from "styled-components/native";

import theme from "../theme";

const EmptyList: FC = () => (
  <Container>
    <SText>There is no characters yet</SText>
  </Container>
);

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const SText = styled.Text`
  font-size: ${theme.fontSizes.xl}px;
`;

export default EmptyList;
