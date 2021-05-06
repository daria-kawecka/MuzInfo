const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
};
export const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: action.errorMsg,
      };
    case 'GET_ARTIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Something went wrong... :(',
      };
    case 'GET_ARTIST_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: [action.payload],
      };
    default:
      return state;
  }
};
