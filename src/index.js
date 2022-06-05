import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import firebaseConfig from './Components/config/fbConfig';
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../src/Components/config/fbConfig'


const store = createStore(rootReducer, applyMiddleware(thunk));



function AllowIfAuth() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
      return <div></div>;
 } if (user) {
      return <App auth={true}/>
  } 
  else if (error) {
      return <div>There was an authentication error.</div>;
  }
    else {
      return <App auth={false}/>
    }
}






// const store = createStore(rootReducer, 
//   compose(
//   applyMiddleware(thunk),
//   reduxFirestore(firebaseConfig),
//   reactReduxFirebase(firebaseConfig, {attachAuthIsReady: true})
//   )
//   );

ReactDOM.render(
  <Provider store={store}>
    <AllowIfAuth> 
       <App /> 
     </AllowIfAuth>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
