import axios from 'axios';

export const GetArtistInfo = (artist) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_ARTIST_LOADING',
    });

    const res = await axios.get(`https://cors.bridged.cc/https://itunes.apple.com/search?term=${artist}&media=music&entity=album`);
    let tempRes = res.data.results.filter((element) => element.trackCount > 1);
    dispatch({
      type: 'GET_ARTIST_SUCCESS',
      payload: tempRes,
      term: artist,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ARTIST_FAIL',
      term: artist,
      error: error.message,
    });
  }
};
