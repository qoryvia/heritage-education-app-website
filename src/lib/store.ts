import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/features/search/searchSlice";
import navigationReducer from "@/lib/slice/navigation.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      navigation: navigationReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];