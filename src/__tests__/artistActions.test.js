/**
 * @jest-environment node
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GetArtistInfo } from 'actions/artistActions';

export const mockStore = configureMockStore([thunk]);

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunk(store)(next)(action);

  return { store, next, invoke };
};

describe('Change Artist Info', () => {
  it('get action from artist actions', async () => {
    const store = mockStore();
    await store.dispatch(GetArtistInfo('Coldplay'));
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'GET_ARTIST_LOADING' });
  });
  it('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch('GET_ARTIST_SUCCESS');
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith('GET_ARTIST_SUCCESS');
    expect(store.getState).toHaveBeenCalled();
  });
});
