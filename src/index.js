import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducer from "./reducers/reducer";
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import watchFetchPic from './actions/actions'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { connect } from "react-redux";
import './index.css'
let moment = require("moment");



// Reducer
// const initialState = {
//   url: '',
//   arrPictures: [],
//   loading: false,
//   error: false,
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'REQUESTED_PIC':
//       return {
//         url: '',
//         arrPictures: [...state.arrPictures],
//         loading: true,
//         error: false,
//       };
//     case 'REQUESTED_PIC_SUCCEEDED':
//       return {
//         url: action.payload.url,
//         arrPictures: [...state.arrPictures, action.payload],
//         loading: false,
//         error: false,
//       };
//     case 'REQUESTED_PIC_FAILED':
//       return {
//         url: '',
//         arrPictures: [...state.arrPictures],
//         loading: false,
//         error: true,
//       };
//     case 'DELETE_PIC': 
//     let oldArr = state.arrPictures;
//     return {
//       arrPictures: oldArr.filter(item => item.title !== action.payload.title),
//       url: action.payload.url,
//     };
  
//     default:
//       return state;
//   }
// };

// Action Creators
// const requestPic = () => {
//   return { type: 'REQUESTED_PIC' }
// };

// const requestPicSuccess = (data) => {
//   return { type: 'REQUESTED_PIC_SUCCEEDED',
//   payload: {
//   url: data.data.fixed_height_downsampled_url,
//   title: data.data.title,
//   date: moment().format("LLL"),
//   smallPic: data.data.fixed_width_downsampled_url  }
//   }
// };

// const requestPicError = () => {
//   return { type: 'REQUESTED_PIC_FAILED' }
// };

// const fetchPic = () => {
//   return { type: 'FETCHED_PIC' }
// };

// const del = (title) => {
//   return {
//   type:'DELETE_PIC',
//   payload: {
//     title: title
//   }
// }
//   };  

// Sagas
// function* watchFetchPic() {
//   yield takeEvery('FETCHED_PIC', fetchPicAsync);
// }


// function* fetchPicAsync() {
//   try {
//     yield put(requestPic());
//     const data = yield call(() => {
//       return fetch("https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA")
//               .then(res => res.json())
//       }
//     );
//     yield put(requestPicSuccess(data));

//   } catch (error) {
//     yield put(requestPicError());
//   }
// }


// Component

// class App extends React.Component {
//   render () {
//     return (
//         <div>
//         <Router>
//             <div className="ui secondary  menu">
//                   <Link className="item" to="/">Главная</Link>
//                   <Link className="item" to="/history">История</Link>
//                   </div>
//               <hr />
//               <Switch>
//                 {/* <Route exact path="/" render={() => <Main />} />
//                 <Route exact path="/history" render={() => <History />} /> */}
//               </Switch>
          
//           </Router>
//       <div>
//         <div className="ui two column centered grid">
//         <div className="column centered">
//         <div className="line">
//         {this.props.loading 
//             ? <p>Loading...</p> 
//             : this.props.error
//             ? <p>Error, try again</p>
//             : <p><img src={this.props.url}/></p>}
//         </div>
//         <p></p>
//         <div className="ui two column centered grid">
//         <button
//         onClick={() => this.props.dispatch(fetchPic())}
//         className="ui violet button">Загрузить</button>
//         </div>
//       </div>
//       </div>
//       <hr></hr>
//       <div class="column">
//             {this.props.arrPictures.map(el => {
//               return (
//                 <div class="ui grid">
//                   <div className="nine wide column">
//                     <img src={el.smallPic} />
//                     <span onClick={()=>this.props.dispatch(del(el.title))} ><i class="archive icon"></i></span>

//                   </div>
//                   <div className="seven wide column">
//                     <h5>{el.title}</h5>
//                     {el.date}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//       </div>
//       </div>
//     )
//   }
// }

// Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchPic);

const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

// Container component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
