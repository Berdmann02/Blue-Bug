import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { auth } from '../config/fbConfig';
import { signOut } from 'firebase/auth'
import {
  getFirestore, collection, getDocs, 
  addDoc, deleteDoc, doc
} from 'firebase/firestore'
import { db } from '../config/fbConfig'
import { onAuthStateChanged } from 'firebase/auth'


// const [state, setState] = useState({});

// useEffect(() => {
//     SignedInLinks();
//     return () => {
//       setState({}); // This worked for me
//     };
// }, []);

// const SignedInLinks = () => {
//     setState({
//         firstName: '',
//         lastName: '',
//     })
// }

function SignedInLinks() {

  // if that doesnt work try const userColRef

//   const { id } = useParams()
//   const [userData, setUserData] = useState('');
//   // const userColRef = collection(getFirestore(), 'users', auth().currentUser.uid);

//   useEffect(() => {
//     userRef.doc(id).get().then(doc => {
//         const newData = doc.data();
//         setUserData(newData);
//         // console.log(newData);
//     });
// }, []);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userColRef);
  //     setUserList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   };

  //   // getUsers();
  // })

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // })


  const userRef = doc(db, 'users', auth.currentUser.uid)

  // onSnapshot(userRef, (doc) => {

  // })





  const logout = async () => {
      await signOut(auth);
    };

  function refreshPage(){ 
    window.location.reload(); 
}

  return (

    <div>
      <ul className="right">
        <li><NavLink to='/create'>Create Ticket</NavLink></li>
        <li><NavLink to='/login' onClick={ logout }>Log Out</NavLink></li>
        {/* {userLists.map((users) => { */}
        <li onClick={ refreshPage }><NavLink to='/profile' className="btn btn-floating #757575 grey darken-1">BE</NavLink></li>
      {/* })} */}
      </ul>
    </div>
  
      
  )
}



export default SignedInLinks


// for floating thing
// {user?.email}
//{userData && userData.initials}