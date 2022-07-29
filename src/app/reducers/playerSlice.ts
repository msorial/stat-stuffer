import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PlayerSliceState {
  players: PlayerProps[];
}

interface PlayerProps {
  id: number;
  firstName: string;
  lastName: string;
}

const initialState: PlayerSliceState = {
  players: [
    { id: 237, firstName: "LeBron", lastName: "James" },
    { id: 490, firstName: "Trae", lastName: "Young" },
    { id: 132, firstName: "Luka", lastName: "Doncic" },
    { id: 192, firstName: "James", lastName: "Harden" },
  ],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<PlayerProps>) => {
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    },
    deletePlayer: (state, action) => {
      const newPlayerArray = state.players.filter(
        (player) => player.id !== action.payload
      );
      return {
        ...state,
        players: newPlayerArray,
      };
    },
  },
});

export const { addPlayer, deletePlayer } = playerSlice.actions;

export const selectPlayers = (state: RootState) => state.playerSlice.players;

export default playerSlice.reducer;
