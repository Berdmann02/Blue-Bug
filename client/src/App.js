import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import SideBar from './Components/Helpers/sideBar'
import Dashboard from './Components/Pages/dashboard';
import CreateTicket from './Components/Pages/createTicket'
import ViewTickets from './Components/Pages/viewTickets'

const theme = createTheme({
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


function App(){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <div className='App'>
          <SideBar />
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/new' element={<CreateTicket/>} />
            <Route exact path='/current' element={<h1>Profile</h1>} />
            <Route exact path='/completed' element={<h1>Complete</h1>} />
            <Route exact path='/login' element={<h1>Login</h1>} />
            <Route exact path='/register' element={<h1>Register</h1>} />
            <Route exact path='/view' element={<ViewTickets />} />
            <Route exact path='/viewall' element={<h1>View All Tickets</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;

