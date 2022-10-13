import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { ICard, IFilterData } from "@models/ICard";

interface ShopState {
  cards: Array<ICard>;
  searchValue: string;
  filterValues: IFilterData;
  dropDownValue: Array<string>;
}

const initialState: ShopState = {
  cards: [],
  searchValue: "",
  filterValues: {
    category: [],
    brand: [],
    rating: [],
    priceMin: 18,
    priceMax: 135,
  },
  dropDownValue: [],
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
    addFilterValues: (state, action: PayloadAction<IFilterData>) => {
      state.filterValues = action.payload;
    },
    addDropDownValues: (state, action: PayloadAction<Array<string>>) => {
      state.dropDownValue = action.payload;
    },
    resetDropDownValues: (state) => {
      state.dropDownValue = [];
    },
  },
});

export const { setCards, addSearchValue, addFilterValues, addDropDownValues, resetDropDownValues } =
  counterSlice.actions;

export default counterSlice.reducer;
