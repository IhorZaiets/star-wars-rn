import { RootState } from "../../../../store/store";
import { STATE_KEY } from "../index";

export const getNumber = (state: RootState): number => state[STATE_KEY].number;
