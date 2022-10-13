import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { SidebarCondition } from "@models/Enums";
import { ICard, IFilterData } from "@models/ICard";

interface ShopState {
  cards: Array<ICard>;
  filteredCards: Array<ICard>;
  categoryValues: Array<{ value: string; checked: boolean }>;
  brandValues: Array<{ value: string; checked: boolean }>;
  searchValue: string;
  filterValues: IFilterData;
  dropDownValue: Array<string>;
}

const initialState: ShopState = {
  cards: [],
  filteredCards: [],
  searchValue: "",
  categoryValues: [],
  brandValues: [],
  filterValues: {
    category: [],
    brand: [],
    rating: [],
    priceMin: 0,
    priceMax: 0,
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
    setFilteredCards: (state, action: PayloadAction<ICard[]>) => {
      state.filteredCards = action.payload;
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
    setCategoriesValues: (state, action: PayloadAction<ICard[]>) => {
      state.categoryValues = Array.from(new Set(action.payload.map((el) => el.categoryPath).flat())).map((el) => ({
        value: el,
        checked: false,
      }));
      state.brandValues = Array.from(new Set(action.payload.map((el) => el.farm).flat())).map((el) => ({
        value: el,
        checked: false,
      }));
    },
    toggleMarkChange: (state, action: PayloadAction<{ fieldName: string; id: number; checked: boolean }>) => {
      SidebarCondition.category === action.payload.fieldName &&
        (state.categoryValues[action.payload.id].checked = !action.payload.checked);
      SidebarCondition.brand === action.payload.fieldName &&
        (state.brandValues[action.payload.id].checked = !action.payload.checked);
    },
    resetFilterState: (state) => {
      state.categoryValues = state.categoryValues.map((el) => ({ ...el, checked: false }));
      state.brandValues = state.brandValues.map((el) => ({ ...el, checked: false }));
    },
  },
});

export const {
  setCards,
  setFilteredCards,
  addSearchValue,
  addFilterValues,
  addDropDownValues,
  resetDropDownValues,
  setCategoriesValues,
  toggleMarkChange,
  resetFilterState,
} = counterSlice.actions;

export default counterSlice.reducer;
