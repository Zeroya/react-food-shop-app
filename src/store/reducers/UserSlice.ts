import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { ICard } from "@models/ICard";

interface ShopState {
  cards: Array<ICard>;
  searchValue: string;
}

const initialState: ShopState = {
  cards: [],
  searchValue: "",
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
    },
    addSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCards, addSearchValue } = counterSlice.actions;

export default counterSlice.reducer;
