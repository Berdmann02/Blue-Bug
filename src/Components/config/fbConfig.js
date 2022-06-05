import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import { reset } from 'ansi-html-community';
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, 
    addDoc, deleteDoc, doc
} from 'firebase/firestore'
import { CREATE_TICKET, CREATE_USER } from '../../Store/types'; 
import {
  getAuth
} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCeN-R1DjMbKPjzk48YkvcmlO0z1F55Sjc",
  authDomain: "bluebug-cee78.firebaseapp.com",
  projectId: "bluebug-cee78",
  storageBucket: "bluebug-cee78.appspot.com",
  messagingSenderId: "81976310431",
  appId: "1:81976310431:web:d037c6c2577c1ab99440aa",
  measurementId: "G-N49EPR04GG"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);

export const auth = getAuth(app);

// collection ref
const colRef = collection(db, 'ticket')
const userColRef = collection(db, 'users')

// get ticket collection data
getDocs(colRef)
 .then(snapshot => {
   // console.log(snapshot.docs)
    let ticket = []
    snapshot.docs.forEach(doc => {
      ticket.push({ ...doc.data(), id: doc.id })
    })
    console.log(ticket);
 })
 .catch(err => {
   console.log(err.message)
 })

// adding tickets
export const createTicket = (props) => (dispatch) => {
  
  addDoc(colRef, {
        title: props.title,
        steps: props.steps,
        result: props.result,
        assignedTo: props.assignedTo,
        severity: props.severity
    }).then((res) =>
        dispatch({ type: CREATE_TICKET, payload: res.data }),
        reset(toHaveFormValues)
        )
}


// get user collection data
getDocs(colRef)
.then(snapshot => {
  // console.log(snapshot.docs)
   let users = []
   snapshot.docs.forEach(doc => {
     users.push({ ...doc.data(), id: doc.id })
   })
   console.log(users);
})
.catch(err => {
  console.log(err.message)
})

// create users
const colRefUser = collection(db, 'users')

export const createUser = (props) => (dispatch) => {
  
  addDoc(colRefUser, {
        firstName: props.firstName,
        lastName: props.lastName,
        initials: props.firstName[0] + props.lastName[0]
    }).then((res) =>
        dispatch({ type: CREATE_USER, payload: res.data }),
        reset(toHaveFormValues)
        )
}


// completing tickets
//  const completeTicketForm = document.querySelector('.complete')
//  completeTicketForm.addEventListener('submit', (e) => {
//     e.preventDefault()

    // const docRef = doc(db, 'tickets', completeTicketForm.id.value)

    // deleteDoc(docRef)
    //   .then(() => {
    //     completeTicketForm.reset();
    //   })


//  })



// firestore().settings({ timestampsInSnapshots: true });

export default firebaseConfig;