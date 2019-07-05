const initialState = {
    url: '',
    arrPictures: [],
    loading: false,
    error: false,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUESTED_PIC':
        return {
          url: '',
          arrPictures: [...state.arrPictures],
          loading: true,
          error: false,
        };
      case 'REQUESTED_PIC_SUCCEEDED':
        return {
          url: action.payload.url,
          arrPictures: [...state.arrPictures, action.payload],
          loading: false,
          error: false,
        };
      case 'REQUESTED_PIC_FAILED':
        return {
          url: '',
          arrPictures: [...state.arrPictures],
          loading: false,
          error: true,
        };
      case 'DELETE_PIC': 
      let oldArr = state.arrPictures;
      return {
        arrPictures: oldArr.filter(item => item.title !== action.payload.title),
        url: action.payload.url,
      };
    
      default:
        return state;
    }
  };

  export default reducer;