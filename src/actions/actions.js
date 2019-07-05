import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
let moment = require("moment");


export const requestPic = () => {
    return { type: 'REQUESTED_PIC' }
  };
  
  export  const requestPicSuccess = (data) => {
    return { type: 'REQUESTED_PIC_SUCCEEDED',
    payload: {
    url: data.data.fixed_height_downsampled_url,
    title: data.data.title,
    date: moment().format("LLL"),
    smallPic: data.data.fixed_width_downsampled_url  }
    }
}

  
export  const requestPicError = () => {
    return { type: 'REQUESTED_PIC_FAILED' }
  };
  
  export  const fetchPic = () => {
      return { type: 'FETCHED_PIC' }
  };
  
  export  const del = (title) => {
    return {
    type:'DELETE_PIC',
    payload: {
        title: title
    }
}
    };  
    
    function* watchFetchPic() {
        yield takeEvery('FETCHED_PIC', fetchPicAsync);
      }
      
      
      function* fetchPicAsync() {
        try {
          yield put(requestPic());
          const data = yield call(() => {
            return fetch("https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA")
                    .then(res => res.json())
            }
          );
          yield put(requestPicSuccess(data));
      
        } catch (error) {
          yield put(requestPicError());
        }
      }
    
      export default watchFetchPic;