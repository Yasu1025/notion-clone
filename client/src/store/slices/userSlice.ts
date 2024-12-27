import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

interface IState {
  user: User | null;
}

const initialState: IState = {
  user: null,
};

export const userSlice = createSlice({
  name: "ser",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
