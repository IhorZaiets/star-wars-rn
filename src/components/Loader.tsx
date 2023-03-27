import React, { FC } from "react";
import * as Progress from "react-native-progress";

import styled from "styled-components/native";

const Loader: FC = () => (
  <LoadingContainer>
    <Progress.Circle borderWidth={5} size={60} indeterminate={true} />
  </LoadingContainer>
);

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loader;
