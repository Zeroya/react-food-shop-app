import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

interface ShopState {
  value: number;
}

const initialState: ShopState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
