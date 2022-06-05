import React, { Component, useState } from 'react'
import { auth } from '../config/fbConfig'
import { createUserWithEmailAndPassword,
  onAuthStateChanged, 
  signInWithEmailAndPassword
} from 'firebase/auth'
import { Navigate } from 'react-router-dom'

function Login(props){

 const [loginEmail, setLoginEmail] = useState('');
 const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


  const [ state, setState ] = React.useState({ logged: false });



 const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(
      auth, 
      loginEmail, 
      loginPassword
      );
    setState({logged:true});
    console.log(user)
      } catch (error) {
       console.log(error.message);
    }
 };


 if (props.auth){ return <Navigate to='/profile' /> }


 
 if(state.logged){
  return <Navigate to="/profile" />
}
  return (
    <div className="container">


     <div style={{ padding: 20 }}></div>

     <img src='BlueBugLogin.svg' alt="BlueBugLogo" height='300'
       width='500' className='center-align' />


     <div className="row">
      <div className="input-field col s6 right">
        <input id="email" type="email" placeholder='Email' style={{ color: 'white' }} required
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}/>
         <label htmlFor="email"></label>
       </div>
     </div>

     <div className="row">
       <div className="input-field col s6 right">
         <input id="password" type="password" placeholder='Password' style={{ color: 'white' }} required 
         onChange={(event) => {
          setLoginPassword(event.target.value);
        }}/>
         <label htmlFor="password"></label>
       </div>
     </div>

     <div style={{ padding: 10 }}></div>

     <div className="input-field right" >
       <button className="btn #37474f blue-grey darken-3" onClick={ login }>Signin</button>
     </div>


     <div>
             <h5 className='left' style={{ color: 'white' }}>User Logged In:</h5>
             {user?.email}
             </div>


   </div>
  )
};


export default Login;

























// class LogIn extends Component {
//   state = {
//     email: '',
//     password: ''
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   }
//   render() {
//     return (
//   <div className="container">

//     <form onSubmit={this.handleSubmit}>

//     <div style={{ padding: 20 }}></div>

//     <img src='BlueBugLogin.svg' alt="BlueBugLogo" height='300'
//       width='500' className='center-align' />


//     <div className="row">
//       <div className="input-field col s6 right">
//         <input id="email" type="email" placeholder='Email' style={{ color: 'white' }} required onChange={this.handleChange}/>
//         <label htmlFor="email"></label>
//       </div>
//     </div>

//     <div className="row">
//       <div className="input-field col s6 right">
//         <input id="password" type="password" placeholder='Password' style={{ color: 'white' }} required onChange={this.handleChange}/>
//         <label htmlFor="password"></label>
//       </div>
//     </div>

//     <div style={{ padding: 10 }}></div>

//     <div className="input-field right" >
//       <button className="btn #37474f blue-grey darken-3">Login</button>
//     </div>

//     </form>

//   </div>

  


//     )
//   }}

// export default LogIn