import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UiSliceState {
  sidebarOpen: boolean;
  darkMode: boolean;
}

const initialState: UiSliceState = {
  sidebarOpen: false,
  darkMode: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    },
    toggleTheme: (state) => {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    },
  },
});

export const { toggleSidebar, toggleTheme } = uiSlice.actions;

export const selectSidebarState = (state: RootState) =>
  state.uiSlice.sidebarOpen;

export const selectColorTheme = (state: RootState) => state.uiSlice.darkMode;

export default uiSlice.reducer;
