import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UiSliceState {
  sidebarOpen: boolean;
}

const initialState: UiSliceState = {
  sidebarOpen: false,
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
  },
});

export const { toggleSidebar } = uiSlice.actions;

export const selectSidebarState = (state: RootState) =>
  state.uiSlice.sidebarOpen;

export default uiSlice.reducer;
