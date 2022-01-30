import {
  configureStore,
  ThunkAction,
  Action,
  Reducer,
  combineReducers
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './features/counter/counterSlice';
import recipeReducer from './features/recipe/recipeSlice';

const reducers = combineReducers({
  counter: counterReducer,
  recipe: recipeReducer
});

const persistConfig = {
  key: 'root',
  blacklist: [],
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers as Reducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
