// themeSlice.js - Redux slice for theme management
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      // Apply theme CSS variables to the document root
      const root = document.documentElement;

      if (state.darkMode) {
        // Apply dark theme variables
        root.style.setProperty("--bg-color", "var(--clr-surface-a0)");
        root.style.setProperty("--nav-bg-color", "var(--clr-surface-a10)");
        root.style.setProperty("--text-color", "var(--clr-light-a0)");
        root.style.setProperty("--primary-color", "var(--clr-primary-a30)");
        root.style.setProperty("--hover-color", "var(--clr-surface-tonal-a20)");
        root.style.setProperty("--input-bg", "var(--clr-surface-a20)");
        root.style.setProperty("--input-placeholder", "var(--clr-surface-a50)");
      } else {
        // Apply light theme variables
        root.style.setProperty("--bg-color", "var(--clr-light-a0)");
        root.style.setProperty("--nav-bg-color", "var(--clr-primary-a0)");
        root.style.setProperty("--text-color", "var(--clr-dark-a0)");
        root.style.setProperty("--primary-color", "var(--clr-primary-a30)");
        root.style.setProperty("--hover-color", "var(--clr-primary-a20)");
        root.style.setProperty("--input-bg", "var(--clr-primary-a20)");
        root.style.setProperty("--input-placeholder", "var(--clr-primary-a50)");
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
