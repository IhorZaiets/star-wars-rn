import React, { FC } from "react";

import styled from "styled-components/native";

import { useAppSelector } from "../../../store/helpers/storeHooks";
import theme from "../../../theme";
import { Gender } from "../../feed/types";
import { getSelectorByGender } from "../helpers/getSelectorByGender";

interface GenderStatisticsProps {
  gender: Gender;
}

const GenderStatistics: FC<GenderStatisticsProps> = ({ gender }) => {
  const numberOfCharacters = useAppSelector(getSelectorByGender(gender));

  return (
    <Container>
      <SText>{gender}</SText>
      <SText>{numberOfCharacters}</SText>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${theme.colors.white};
  shadow-color: ${theme.colors.black};
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  shadow-offset: 0 -2px;
  elevation: 30;
  padding: 10px 16px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const SText = styled.Text`
  font-size: ${theme.fontSizes.m}px;
`;

export default GenderStatistics;
