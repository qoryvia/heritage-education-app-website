import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  isOpen: boolean;
}

const initialState: SearchState = {
  query: "",
  isOpen: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSearchOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    clearSearch(state) {
      state.query = "";
    },
  },
});

export const { setSearchQuery, setSearchOpen, clearSearch } =
  searchSlice.actions;

export default searchSlice.reducer;