import React from 'react';
import './App.css';
import Header from './components/header/presentation/Header.js';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Login from './features/auth/login/presentation/Login';
import ForgotPassword from './features/auth/forgot_password/presentation/ForgotPassword';
import Profile from './features/profile/presentation/Profile';
import Home from './features/home/presentation/Home';
import BlockMenu from './features/profile/components/BlockMenu';
import ProductDetail from './features/product/product_detail.jsx/presentation/ProductDetail';
import { StyledEngineProvider } from '@mui/material';
import Search from './features/search/presentation/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './stores/index.js';

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
  },
  palette: {
    background: {
      default: "#ffffff"
    }
  }
});

function App() {
  return (

    <Provider store={store}>
      <ThemeProvider theme={theme} >
      <CssBaseline>
        <StyledEngineProvider injectFirst>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" name="Home" Component={Home} />
              <Route path="/search" name="Search" element={<Search />} />
              <Route path="/product-detail/:productSlug/:variantSku" name="Product Detail" Component={ProductDetail} />
              <Route path="/login" name='Login' Component={Login}/>
              {/* </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/product">
              <ProductDetail />
            </Route> */}
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </CssBaseline>
    </ThemeProvider>
    </Provider>



  );
}

export default App;
