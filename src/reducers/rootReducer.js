import { combineReducers } from 'redux';

import { artistReducer } from './artistReducer';

export const rootReducer = combineReducers({
  artistInfo: artistReducer,
});
