import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PickerSliceState {
  singlePlayerStats: PickerProps[];
}

export interface PickerProps {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  min: number;
  oreb: number;
  pf: number;
  pts: number;
  reb: number;
  stl: number;
  turnover: number;
  game: GameProps;
  player: PlayerProps;
  team: TeamProps;
}

interface GameProps {
  id: number;
  date: string;
  home_team_id: number;
  home_team_score: number;
  season: number;
  visitor_team_id: number;
  visitor_team_score: number;
}

interface PlayerProps {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  team_id: number;
}

interface TeamProps {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

const initialState: PickerSliceState = {
  singlePlayerStats: [],
};

export const pickerSlice = createSlice({
  name: 'picker',
  initialState,
  reducers: {
    addPicks: (state, action: PayloadAction<PickerProps[]>) => {
      return {
        ...state,
        singlePlayerStats: [...action.payload],
      };
    },
    deletePicks: (state) => {
      return {
        ...state,
        singlePlayerStats: initialState.singlePlayerStats,
      };
    },
  },
});

export const { addPicks, deletePicks } = pickerSlice.actions;

export const selectPicks = (state: RootState) =>
  state.pickerSlice.singlePlayerStats;

export default pickerSlice.reducer;
