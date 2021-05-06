import axios from 'axios';

export const GetArtistInfo = (artist) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_ARTIST_LOADING',
    });

    const res = await axios.get(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album`);
    let tempRes = res.data.results.filter((element) => element.trackCount > 1);
    dispatch({
      type: 'GET_ARTIST_SUCCESS',
      payload: tempRes,
    });
  } catch (e) {
    dispatch({
      type: 'GET_ARTIST_FAIL',
      error: e.message,
    });
  }
};
