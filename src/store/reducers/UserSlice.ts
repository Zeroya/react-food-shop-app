import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { SidebarCondition } from "@models/Enums";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import { ICard, IFilterData } from "@models/ICard";

interface ShopState {
  cards: Array<ICard>;
  filteredCards: Array<ICard>;
  paginatedCards: Array<ICard>;
  categoryValues: Array<{ value: string; checked: boolean }>;
  brandValues: Array<{ value: string; checked: boolean }>;
  searchValue: string;
  filterValues: IFilterData;
  dropDownValue: Array<string>;
  sortValue: string;
  productDetail: Array<ICard>;
}

const initialState: ShopState = {
  cards: [],
  filteredCards: [],
  paginatedCards: [],
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
  sortValue: "",
  productDetail: [],
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
    setPaginatedCards: (state, action: PayloadAction<ICard[]>) => {
      state.paginatedCards = action.payload;
    },
    setSortValue: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    },
    addSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    addCategoryValue: (state, action: PayloadAction<string>) => {
      state.filterValues.category = [action.payload];
      action.payload === "all categories" && (state.filterValues.category = []);
      state.categoryValues = state.categoryValues.map((el) => ({
        ...el,
        checked: state.filterValues.category[0] === el.value.toLowerCase(),
      }));
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
        value: firstLetterStrUpperCase(el),
        checked: false,
      }));
      state.brandValues = Array.from(new Set(action.payload.map((el) => el.farm).flat())).map((el) => ({
        value: firstLetterStrUpperCase(el),
        checked: false,
      }));
    },
    toggleMarkChange: (state, action: PayloadAction<{ fieldName: string; id: number; checked: boolean }>) => {
      const { fieldName, id, checked } = action.payload;
      SidebarCondition.category === fieldName &&
        (state.categoryValues = state.categoryValues.map((el, eId) =>
          eId === id ? { ...el, checked: !checked } : { ...el, checked: false }
        ));
      SidebarCondition.brand === fieldName && (state.brandValues[id].checked = !checked);
    },
    resetFilterState: (state) => {
      state.categoryValues = state.categoryValues.map((el) => ({ ...el, checked: false }));
      state.brandValues = state.brandValues.map((el) => ({ ...el, checked: false }));
    },
    resetBrandState: (state) => {
      state.brandValues = state.brandValues.map((el) => ({ ...el, checked: false }));
    },
    addProductDetail: (state, action: PayloadAction<ICard[]>) => {
      state.productDetail = action.payload;
    },
    removeProductDetail: (state) => {
      state.productDetail = [];
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
  addCategoryValue,
  setSortValue,
  setPaginatedCards,
  resetBrandState,
  addProductDetail,
  removeProductDetail,
} = counterSlice.actions;

export default counterSlice.reducer;
