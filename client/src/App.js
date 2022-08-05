import * as React from 'react'
import './main.css'
import { GlobalProvider, useGlobalContext } from './Context/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import { useDarkMode } from './Components/darkMode';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import SideBar from './Components/Helpers/sideBar'
import Dashboard from './Components/Pages/LoggedIn/dashboard';
import CreateTicket from './Components/Pages/LoggedIn/createTicket'
import ViewTickets from './Components/Pages/Admin/viewTickets'
import MyTickets from './Components/Pages/LoggedIn/myTickets'
import ProfilePage from './Components/Pages/LoggedIn/profilePage';
import CompletedTickets from './Components/Pages/LoggedIn/completedTickets'
import Settings from './Components/Pages/LoggedIn/settings'
import ChangePassword from './Components/Pages/LoggedIn/changePassword'
import NewUsers from './Components/Pages/LoggedIn/newUsers';
import EditTickets from './Components/Pages/LoggedIn/editTickets'
import Notifications from './Components/Pages/LoggedIn/notifications'
import Login from './Components/Pages/LoggedOut/Login'
import Register from './Components/Pages/LoggedOut/register'
import ForgotPassword from './Components/Pages/LoggedOut/forgotPassword'


function App() {


  const dark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1C75BC'
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
        'Open Sans',
        'sans-serif',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700
    },
  });

  const light = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1C75BC'
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
        'Open Sans',
        'sans-serif',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700
    },
  });

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'dark' ? dark : light;

  const value = localStorage.getItem('theme')


  const { user } = useGlobalContext();
  console.log(user);

  // const navigate = useNavigate();

  // function ProtectedRoute ({ children }) {
  //   const { user } = useGlobalContext();

  //   const navigate = useNavigate();

  //   if (user) {
  //     return <navigate to="/login" />;
  //   }

  //   return children;
  // };

  // if(show){
  //   {user}
  // };

  // if(user==='null'){
  //   const auth = false
  // } else {
  //   const auth = true
  // }

  // if(user=null){
  //   return false
  // } else {
  //   return true
  // }

  //   const USERLOGGEDIN = user

  //   function CheckUser(){
  //   if(USERLOGGEDIN=null){
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // const { pathname } = useLocation();

  // const privateRoutes =
  //   <div >
  //     <SideBar />
  //     <Routes>
  //       <Route exact path='/' element={<Dashboard />} />
  //       <Route exact path='/new' element={<CreateTicket />} />
  //       <Route exact path='/current' element={<ProfilePage value={value} />} />
  //       <Route exact path='/completed' element={<CompletedTickets />} />
  //       <Route exact path='/view' element={<ViewTickets />} />
  //       <Route exact path='/mytickets' element={<MyTickets />} />
  //       <Route exact path='/notifications' element={<Notifications />} />
  //       <Route exact path='/edit:ticketid' element={<EditTickets />} />
  //       <Route exact path='/change' element={<ChangePassword />} />
  //       <Route exact path='/newuser' element={<NewUsers />} />
  //       <Route exact path='/settings' element={<Settings state={theme} parentCallback={themeToggler} value={value} />} />
  //     </Routes>
  //   </div>

  // const publicRoutes =
  //   <div >
  //     <Routes>
  //       <Route exact path='/login' element={<Login value={value} />} />
  //       <Route exact path='/register' element={<Register />} />
  //       <Route exact path='/forgot' element={<ForgotPassword />} />
  //     </Routes>
  //   </div>

  return (
    <GlobalProvider>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <BrowserRouter>
          <div className='App'>
              <SideBar/>
            <Routes>
              <Route exact path='/' element={<Dashboard user={user}/>} />
              <Route exact path='/new' element={<CreateTicket user={user}/>} />
              <Route exact path='/current' element={<ProfilePage value={value} user={user}/>} />
              <Route exact path='/completed' element={<CompletedTickets user={user}/>} />
              <Route exact path='/view' element={<ViewTickets user={user}/>} />
              <Route exact path='/mytickets' element={<MyTickets user={user}/>} />
              <Route exact path='/notifications' element={<Notifications user={user}/>} />
              <Route exact path='/edit:ticketid' element={<EditTickets user={user}/>} />
              <Route exact path='/change' element={<ChangePassword user={user}/>} />
              <Route exact path='/newuser' element={<NewUsers user={user}/>} />
              <Route exact path='/settings' element={<Settings user={user} state={theme} parentCallback={themeToggler} value={value} />} />

              <Route exact path='/login' element={<Login value={value} user={user} />} />
              <Route exact path='/register' element={<Register user={user}/>} />
              <Route exact path='/forgot' element={<ForgotPassword user={user}/>} />
            </Routes>
            {/* {user ? privateRoutes : publicRoutes} */}
          </div>




          {/* {user === 'null' ? publicRoutes : privateRoutes} */}
          {/* {publicRoutes}
        {privateRoutes} */}




          {/* {CheckUser ?
            <div className='App'>
              <SideBar />
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/new' element={<CreateTicket />} />
                <Route exact path='/current' element={<ProfilePage value={value} />} />
                <Route exact path='/completed' element={<CompletedTickets />} />
                <Route exact path='/view' element={<ViewTickets />} />
                <Route exact path='/mytickets' element={<MyTickets />} />
                <Route exact path='/notifications' element={<Notifications />} />
                <Route exact path='/edit:ticketid' element={<EditTickets />} />
                <Route exact path='/change' element={<ChangePassword />} />
                <Route exact path='/newuser' element={<NewUsers />} />
                <Route exact path='/settings' element={<Settings state={theme} parentCallback={themeToggler} value={value} />} />
              </Routes>
            </div>
            :
            <div className='App'>
              <Routes>
                <Route exact path='/login' element={<Login value={value} />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/forgot' element={<ForgotPassword />} />
              </Routes>
            </div>
          } */}

          {/* {CheckUser ?
            <div className='App'>
              <Routes>
                <Route exact path='/login' element={<Login value={value} />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/forgot' element={<ForgotPassword />} />
              </Routes>
            </div>
            :
            <div className='App'>
              <SideBar />
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/new' element={<CreateTicket />} />
                <Route exact path='/current' element={<ProfilePage value={value} />} />
                <Route exact path='/completed' element={<CompletedTickets />} />
                <Route exact path='/view' element={<ViewTickets />} />
                <Route exact path='/mytickets' element={<MyTickets />} />
                <Route exact path='/notifications' element={<Notifications />} />
                <Route exact path='/edit:ticketid' element={<EditTickets />} />
                <Route exact path='/change' element={<ChangePassword />} />
                <Route exact path='/newuser' element={<NewUsers />} />
                <Route exact path='/settings' element={<Settings state={theme} parentCallback={themeToggler} value={value} />} />
              </Routes>
            </div>
          } */}
        </BrowserRouter>
      </ThemeProvider>
    </GlobalProvider>
  )
};

export default App;

