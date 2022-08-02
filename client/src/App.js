import * as React from 'react'
import { GlobalProvider } from './Context/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import { useDarkMode } from './Components/darkMode';
import SideBar from './Components/Helpers/sideBar'
import Dashboard from './Components/Pages/dashboard';
import CreateTicket from './Components/Pages/createTicket'
import ViewTickets from './Components/Pages/Admin/viewTickets'
import MyTickets from './Components/Pages/myTickets'
import ProfilePage from './Components/Pages/profilePage';
import CompletedTickets from './Components/Pages/completedTickets'
import Settings from './Components/Pages/settings'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/register'
import ForgotPassword from './Components/Pages/forgotPassword'
import Notifications from './Components/Pages/notifications'
import ChangePassword from './Components/Pages/changePassword'
import NewUsers from './Components/Pages/newUsers';
import EditTickets from './Components/Pages/editTickets'


function App(){


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
        },});

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
          },});

          const [theme, themeToggler] = useDarkMode();

          const themeMode = theme === 'dark' ? dark : light;

          const value = localStorage.getItem('theme')

          // const privateRoutes = 
          // <div className='App'> 
          // <SideBar />
          //  <Routes>
          //    <Route exact path='/' element={<Dashboard/>}/>
          //    <Route exact path='/new' element={<CreateTicket/>} />
          //    <Route exact path='/current' element={<ProfilePage value={value} />} />
          //    <Route exact path='/completed' element={<CompletedTickets />} />
          //    <Route exact path='/view' element={<ViewTickets />} />
          //    <Route exact path='/mytickets' element={<MyTickets />} />
          //    <Route exact path='/settings' element={<Settings state={theme} parentCallback={themeToggler} value={value}/>} />
          //  </Routes>
          //   </div>

  return (
    <GlobalProvider>
    <ThemeProvider theme={themeMode}>
      <CssBaseline/>
      <BrowserRouter>
        <div className='App'> 
         <SideBar />
         {/* {privateRoutes} */}
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/new' element={<CreateTicket/>} />
            <Route exact path='/current' element={<ProfilePage value={value} />} />
            <Route exact path='/completed' element={<CompletedTickets />} />
            <Route exact path='/view' element={<ViewTickets />} />
            <Route exact path='/mytickets' element={<MyTickets />} />
            <Route exact path='/notifications' element={<Notifications />} />
            <Route exact path='/edit:ticketid' element={<EditTickets />} />
            <Route exact path='/change' element={<ChangePassword />} />
            <Route exact path='/newuser' element={<NewUsers />} />
            <Route exact path='/settings' element={<Settings state={theme} parentCallback={themeToggler} value={value}/>} />

            <Route exact path='/login' element={<Login value={value} />} />
             <Route exact path='/register' element={<Register />} />
             <Route exact path='/forgot' element={<ForgotPassword />} />
          </Routes>
          </div>
      </BrowserRouter>
    </ThemeProvider>
    </GlobalProvider>
  )
};

export default App;

