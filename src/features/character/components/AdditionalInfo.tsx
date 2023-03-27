import { format } from "date-fns";
import React, { FC } from "react";

import styled from "styled-components/native";

import theme from "../../../theme";

interface AdditionalInfoProps {
  birth_year: string;
  gender: string;
  mass: string;
  height: string;
  skin_color: string;
  eye_color: string;
  created: string;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  birth_year,
  gender,
  mass,
  height,
  skin_color,
  eye_color,
  created,
}) => (
  <Container>
    <RowContainer>
      <StyledText>Birth year:</StyledText>
      <StyledText>{birth_year}</StyledText>
    </RowContainer>
    <RowContainer>
      <StyledText>Gender:</StyledText>
      <StyledText>{gender}</StyledText>
    </RowContainer>
    <RowContainer>
      <StyledText>Mass:</StyledText>
      <StyledText>{mass}kg</StyledText>
    </RowContainer>
    <RowContainer>
      <StyledText>Height:</StyledText>
      <StyledText>{height}cm</StyledText>
    </RowContainer>
    <RowContainer>
      <StyledText>Skin color:</StyledText>
      <StyledText>{skin_color}</StyledText>
    </RowContainer>
    <RowContainer>
      <StyledText>Eye color:</StyledText>
      <StyledText>{eye_color}</StyledText>
    </RowContainer>
    <RowContainer>
      <StyledText>Created:</StyledText>
      <StyledText>{format(new Date(created), "dd MMMM yyyy")}</StyledText>
    </RowContainer>
  </Container>
);

const Container = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 20px;
`;

const StyledText = styled.Text`
  font-size: ${theme.fontSizes.l}px;
  margin-top: 10px;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-vertical: 5px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.gray};
`;

export default AdditionalInfo;
