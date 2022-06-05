// import { CREATE_TICKET } from "../types"
// import {
//     getFirestore, collection, getDocs, 
//     addDoc
// } from 'firebase/firestore'

// export const createTicket = (props) => (dispatch) => {
//     addDoc(collection(getFirestore(), "ticket"), {
//         title: props.title,
//         steps: props.steps,
//         result: props.result,
//         assignedTo: props.assignedTo,
//         severity: props.severity
//     }).then((res) =>
//         dispatch({ type: CREATE_TICKET, payload: res.data }))
// }




