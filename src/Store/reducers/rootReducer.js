import authReducer from "./authReducer";
import { combineReducers } from "redux";
import ticketReducer from './ticketReducer'
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    ticket: ticketReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;