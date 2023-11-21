import React from 'react';
import './App.css';
import Header from './components/header/presentation/Header.js';
import { ThemeProvider, createTheme } from '@mui/material';
import Login from './features/auth/login/presentation/Login';
import ForgotPassword from './features/auth/forgot_password/presentation/ForgotPassword';
import Profile from './features/profile/presentation/Profile';
import Home from './components/home/Home';
import BlockMenu from './features/profile/components/BlockMenu';
import HomeProfile from './features/profile/components/HomeProfile.js';
import Discountt from './features/discount/presentation/Discount.js';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Header/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
