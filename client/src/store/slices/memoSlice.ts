import { createSlice } from "@reduxjs/toolkit";
import { Memo } from "../../types";

interface IState {
  myMemos: Memo[];
}

const initialState: IState = {
  myMemos: [],
};

export const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    setMyMemos: (state, { payload }) => {
      state.myMemos = payload;
    },
  },
});

export const { setMyMemos } = memoSlice.actions;
export default memoSlice.reducer;
