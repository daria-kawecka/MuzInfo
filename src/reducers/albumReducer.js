const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
};
export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUM_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: action.errorMsg,
      };
    case 'GET_ALBUM_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Something went wrong... :(',
      };
    case 'GET_ALBUM_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [action.payload],
        errorMsg: '',
      };
    default:
      return state;
  }
};
