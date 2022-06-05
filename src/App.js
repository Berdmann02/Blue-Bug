import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/dashboard';
import CreateTicket from '../src/Components/projects/createTickets'
import LogIn from './Components/auth/logIn';
import NewUsers from './Components/auth/newUsers';
import ProfilePage from './Components/projects/profilePage';
import CompletedTickets from './Components/projects/completedTickets';
import TicketDetails from './Components/projects/ticketDetails';
import DisplayProfile from './Components/projects/displayProfile';
import { auth } from '../src/Components/config/fbConfig'
import { useAuthState } from "react-firebase-hooks/auth";


function App(props) {

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard auth={props.auth} />} />
          <Route path='/create' element={<CreateTicket auth={props.auth}/>} />
          <Route path='/profile' element={<DisplayProfile auth={props.auth}/>} />
          <Route path='/completed' element={<CompletedTickets auth={props.auth}/>} />
          <Route path='/login' element={<LogIn auth={props.auth}/>} />
          <Route path='newuser' element={<NewUsers auth={props.auth}/>} />
        </Routes>

      </div>
    </BrowserRouter>
  )




}

export default App;



















// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Navbar />
//           <Routes>
//             <Route path='/'element={<Dashboard/>} />
//             <Route path='/create'element={<CreateTicket/>} />
//             <Route path='/login' element={<LogIn/>} />
//             <Route path='newuser'element={<NewUsers/>} />
//             <Route path='/profile'element={<DisplayProfile/>} />
//             <Route path='/completed'element={<CompletedTickets/>} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
