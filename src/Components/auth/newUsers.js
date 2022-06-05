import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser, auth } from '../config/fbConfig'
import { signIn } from '../../Store/actions/authActions'
import { createUserWithEmailAndPassword,
          onAuthStateChanged
    } from 'firebase/auth'


function NewUsers(props) {

 const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [ state, setState ] = React.useState({ firstName: '', lastName: '', submitted: false });


  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(
      auth, 
      registerEmail, 
      registerPassword
      );
    console.log(user)
      } catch (error) {
       console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createUser(state);
    setState({submitted:true});
  }

  if (props.auth){ return <Navigate to='/profile' /> }

  if(state.submitted){
          return <Navigate to="/profile" />
  }
  return (
    <div className="container">

         <form onSubmit={handleSubmit}>

         <h5 style={{ color: 'white' }} className='center'>Create a New User</h5>

<div className="row">
  <div className="input-field col s6">
    <input placeholder="First Name" id="firstName" type="text" style={{ color: 'white' }} required onChange={(event) => setState({...state, firstName: event.target.value})} value={state.firstName}/>
    <label htmlFor="first_name"></label>
  </div>
  <div className="input-field col s6">
    <input id="lastName" type="text" placeholder='Last Name' style={{ color: 'white' }} required onChange={(event) => setState({...state, lastName: event.target.value})} value={state.lastName}/>
    <label htmlFor="last_Name"></label>

    <div style={{ padding: 5 }}></div>

         <div className="input-field col s12">
           <input id="email" type="email" placeholder='Email' style={{ color: 'white' }} required 
           onChange={(event) => {
             setRegisterEmail(event.target.value);
           }}/>
           <label htmlFor="email"></label>

         </div>
        
         <div className="row">

         <div className="input-field col s12">
           <input id="password" type="password" placeholder='Password' className='left' style={{ color: 'white' }} required 
           onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}/>
           <label htmlFor="password"></label>
           </div>

           </div>

           <div className="input-field right" >
                 <button className="btn #37474f blue-grey darken-3" onClick={register}>Submit</button>
             </div>

        </div>
         </div>

         </form>
    </div>
  )
          }




const mapDispatchToProps = dispatch => {
  return {
      createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(NewUsers)




















// class NewUsers extends Component {
//   state = {
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     submitted: false
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.signIn(this.state)
//     this.setState({submitted:true})
//   }


//   render() {
//     if(this.state.submitted){
//       return <Navigate to="/profile" />
//   }
//     return (
//     <div className="container">

//         <form onSubmit={this.handleSubmit}>

//         <h5 style={{ color: 'white' }} className='center'>Create a New User</h5>

//       <div className="row">
//         <div className="input-field col s6">
//           <input placeholder="First Name" id="firstName" type="text" style={{ color: 'white' }} required onChange={this.handleChange}/>
//           <label htmlFor="first_name"></label>
//         </div>
//         <div className="input-field col s6">
//           <input id="lastName" type="text" placeholder='Last Name' style={{ color: 'white' }} required onChange={this.handleChange}/>
//           <label htmlFor="last_Name"></label>

//           <div style={{ padding: 5 }}></div>

//         </div>

//         <div className="row">

//         <div className="input-field col s12">
//           <input id="email" type="email" placeholder='Email' style={{ color: 'white' }} required onChange={this.handleChange}/>
//           <label htmlFor="email"></label>

//         </div>
        
//         <div className="row">

//         <div className="input-field col s12">
//           <input id="password" type="password" placeholder='Password' className='left' style={{ color: 'white' }} required onChange={this.handleChange}/>
//           <label htmlFor="password"></label>
//           </div>

//           </div>

//           <div className="input-field right" >
//                 <button className="btn #37474f blue-grey darken-3">Submit</button>
//             </div>



//         </div>
//       </div>

//         </form>
//     </div>
//   )
// }}


// const mapDispatchToProps = (dispatch) => {
//   return {
//       signIn: (creds) => dispatch(signIn(creds))
//   }
// }

// export default connect(null, mapDispatchToProps)(NewUsers)
