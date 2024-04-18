import {createSlice} from '@reduxjs/toolkit';
import img1 from '../../../assets/babe.jpeg';
import img2 from '../../../assets/babe1.jpeg';
import img3 from '../../../assets/babe2.jpeg';

export const directorySlice = createSlice({
  name: 'directory',
  initialState: {
    section: [
      {id: 1, title: 'hats', imgUrl: img1},
      {id: 2, title: 'jackets', imgUrl: img3},
      {id: 3, title: 'sneakers', imgUrl: img2},
      {id: 4, title: 'womens', imgUrl: img1, size: 'large'},
      {id: 5, title: 'mens', imgUrl: img3, size: 'large'},
    ],
  },

  reducers: {
    AddDirectory: (state, action) => {
      return state;
    },
  },
});

export const {AddDirectory} = directorySlice.actions;

export default directorySlice.reducer;
