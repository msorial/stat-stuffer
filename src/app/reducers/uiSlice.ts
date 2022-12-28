import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UiSliceState {
  sidebarClosed: boolean;
}

const initialState: UiSliceState = {
  sidebarClosed: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return {
        ...state,
        sidebarClosed: !state.sidebarClosed,
      };
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;

export const selectSidebarClosed = (state: RootState) =>
  state.uiSlice.sidebarClosed;

export default uiSlice.reducer;
