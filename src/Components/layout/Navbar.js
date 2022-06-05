import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { auth } from '../config/fbConfig'
import { onAuthStateChanged } from 'firebase/auth'

function Navbar() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

const links = user?.uid ? <SignedInLinks /> : <SignedOutLinks />;


  return (
    <nav className="nav-wrapper #0d47a1 blue darken-4">
      <div className="container">
        <Link to='/' className="brand-logo">
        <img src='BlueBugLogo4.svg' alt="BlueBugLogo"  height='68'
width='250' />
        </Link>
        { links }
      </div>
    </nav>
  )
}

export default Navbar;

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth
//   }
// }

// export default connect(mapStateToProps)(Navbar);