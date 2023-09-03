import { configureStore } from '@reduxjs/toolkit';
import { viewTypeMainReducer } from './reducers/view-type-main';
import { dataReducer } from './reducers/data';

export const store = configureStore({
  reducer: {
    viewTypeMain: viewTypeMainReducer.reducer,
    dataReducer: dataReducer.reducer,
  },
});
