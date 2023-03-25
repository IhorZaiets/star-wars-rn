import React, { FC, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/helpers/storeHooks";
import { increment } from "../modules";
import { useLazyGetWariorQuery } from "../modules/api";
import { getNumber } from "../modules/selectors";

const FeedScreen: FC = () => {
  const number = useAppSelector(getNumber);
  const dispatch = useAppDispatch();

  const [getWarior] = useLazyGetWariorQuery();

  useEffect(() => {
    const async = async () => {
      const res = await getWarior();

      console.log(res);
    };

    async();
  }, [getWarior]);

  return (
    <TouchableOpacity onPress={() => dispatch(increment())}>
      <Text>{number}</Text>
    </TouchableOpacity>
  );
};

export default FeedScreen;
