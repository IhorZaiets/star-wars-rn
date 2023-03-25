import { combineReducers } from "@reduxjs/toolkit";

import FeedReducer, {
  STATE_KEY as FEED_STATE_KEY,
} from "../features/feed/modules";
import { feedApi } from "../features/feed/modules/api";

const rootReducer = combineReducers({
  [FEED_STATE_KEY]: FeedReducer,

  //API
  [feedApi.reducerPath]: feedApi.reducer,
});

export default rootReducer;
