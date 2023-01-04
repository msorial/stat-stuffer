import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PlayerSliceState {
  players: PlayerProps[];
}

export interface PlayerProps {
  id: number;
  firstName: string;
  lastName: string;
  team: string;
  games_played: number;
  season: number;
  min: string;
  fgm: number;
  fga: number;
  fg3m: number;
  fg3a: number;
  ftm: number;
  fta: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  turnover: number;
  pf: number;
  pts: number;
  fg_pct: number;
  fg3_pct: number;
  ft_pct: number;
}

const initialState: PlayerSliceState = {
  players: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<PlayerProps>) => {
      const playerIndex = state.players.findIndex(
        (player: PlayerProps) => player.id === action.payload.id
      ); // -1 = Player not found in array

      return {
        ...state,
        players:
          playerIndex === -1
            ? [...state.players, action.payload]
            : [...state.players],
      };
    },
    deletePlayer: (state, action) => {
      const newPlayerArray = state.players.filter(
        (player: PlayerProps) => player.id !== action.payload
      );
      return {
        ...state,
        players: newPlayerArray,
      };
    },
    deleteAllPlayers: (state) => {
      return {
        ...state,
        players: [],
      };
    },
  },
});

export const { addPlayer, deletePlayer, deleteAllPlayers } =
  playerSlice.actions;

export const selectPlayers = (state: RootState) => state.playerSlice.players;

export default playerSlice.reducer;
