import { combineReducers } from 'redux';

import { artistReducer } from './artistReducer';
import { albumReducer } from './albumReducer';

export const rootReducer = combineReducers({
  artistInfo: artistReducer,
  albumInfo: albumReducer,
});
