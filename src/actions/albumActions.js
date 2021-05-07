import axios from 'axios';

export const GetAlbumInfo = (collectionId) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_ALBUM_LOADING',
    });

    const res = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&entity=song`);
    dispatch({
      type: 'GET_ALBUM_SUCCESS',
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: 'GET_ALBUM_FAIL',
      error: e.message,
    });
  }
};
