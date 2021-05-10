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
  it('Get action from artist actions', async () => {
    const store = mockStore();
    await store.dispatch(GetAlbumInfo(829909653));
    const actions = await store.getActions();
    expect(actions[0].type).toEqual('GET_ALBUM_LOADING');
    expect(actions[1].type).toEqual('GET_ALBUM_FAIL');
  });
  it('Passes dispatch and getState', () => {
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
