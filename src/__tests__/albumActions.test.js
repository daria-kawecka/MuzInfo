/**
 * @jest-environment node
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GetAlbumInfo } from 'actions/albumActions';

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

describe('Change Album Info', () => {
  it('get action from artist actions', async () => {
    const store = mockStore();
    await store.dispatch(GetAlbumInfo(726372830));
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'GET_ALBUM_LOADING' });
  });
  it('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch('GET_ALBUM_SUCCESS');
      getState();
    });
    expect(store.dispatch).not.toHaveBeenCalledWith('GET_ALBUM_LOADING');
    expect(store.dispatch).toHaveBeenCalledWith('GET_ALBUM_SUCCESS');
    expect(store.dispatch).not.toHaveBeenCalledWith('GET_ALBUM_FAIL');
    expect(store.getState).toHaveBeenCalled();
  });
});
