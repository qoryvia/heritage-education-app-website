import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  mobileMenuOpen: boolean;
}

const initialState: NavigationState = {
  mobileMenuOpen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu } = navigationSlice.actions;

export default navigationSlice.reducer;