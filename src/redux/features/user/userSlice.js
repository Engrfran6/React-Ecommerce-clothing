import {createSelector, createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
  },
});

export const authUser = (state) => state.user;
export const selectUser = createSelector([authUser], (user) => {
  user;
});

// Action creators are generated for each case reducer function
export const {addUser} = userSlice.actions;

export default userSlice.reducer;
