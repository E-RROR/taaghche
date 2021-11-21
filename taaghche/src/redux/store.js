import { configureStore } from '@reduxjs/toolkit';
import leafsReducer from "./leafs/leafs";

export default configureStore({
  reducer: {
      leafs: leafsReducer,
  },
})