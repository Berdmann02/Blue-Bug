import * as React from 'react'
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import SideBar from './Components/Helpers/sideBar'
import Dashboard from './Components/Pages/dashboard';
import CreateTicket from './Components/Pages/createTicket'
import ViewTickets from './Components/Pages/Admin/viewTickets'
import MyTickets from './Components/Pages/myTickets'
import ProfilePage from './Components/Pages/profilePage';
import CompletedTickets from './Components/Pages/completedTickets'
import Settings from './Components/Pages/settings'


function App(){

  const [checked, setChecked] = React.useState(true)

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

          const value = checked;

  return (
    <ThemeProvider theme={checked ? dark : light}>
      <CssBaseline/>
      <BrowserRouter>
        <div className='App'>
          <SideBar />
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/new' element={<CreateTicket/>} />
            <Route exact path='/current' element={<ProfilePage value={value} />} />
            <Route exact path='/completed' element={<CompletedTickets />} />
            <Route exact path='/login' element={<h1>Login</h1>} />
            <Route exact path='/register' element={<h1>Register</h1>} />
            <Route exact path='/view' element={<ViewTickets />} />
            <Route exact path='/mytickets' element={<MyTickets />} />
            <Route exact path='/settings' element={<Settings state={checked} parentCallback={setChecked} value={value} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;

