import {createSlice} from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shopData: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchShopDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchShopDataSuccess: (state, action) => {
      state.isLoading = false;
      state.shopData = action.payload;
    },
    fetchShopDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchShopDataStart, fetchShopDataSuccess, fetchShopDataFailure} = shopSlice.actions;

export default shopSlice.reducer;
