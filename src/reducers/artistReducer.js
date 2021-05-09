const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
  term: '',
};
export const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: action.errorMsg,
        term: action.term,
      };
    case 'GET_ARTIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Something went wrong... :(',
        term: action.term,
      };
    case 'GET_ARTIST_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: [action.payload],
        term: action.term,
      };
    default:
      return state;
  }
};
