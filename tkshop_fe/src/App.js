import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/presentation/Header.js";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Login from "./features/auth/login/presentation/Login";
import ForgotPassword from "./features/auth/forgot_password/presentation/ForgotPassword";
import Profile from "./features/profile/presentation/Profile";
import Home from "./features/home/presentation/Home";
import ProductDetail from "./features/product/product_detail.jsx/presentation/ProductDetail";
import { StyledEngineProvider } from "@mui/material";
import Search from "./features/search/presentation/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./stores/index.js";
import Cart from "./features/cart/presentation/Cart.js";
import Cookies from "js-cookie";
import axios from "axios";
import { login } from "./actions/UserAction.js";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    background: {
      default: "#f4f6f8",
    },
  },
});

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  console.log(Cookies.get("token"));
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const responses = await axios.get("http://localhost:3030/user/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          dispatch(login(responses.data));
        } catch (error) {
          // Xử lý lỗi ở đây
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        }
      }
    };

    fetchData();
  }, [dispatch, token]);

  return (
    <Provider store={store}>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledEngineProvider injectFirst>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" name="Home" Component={Home} />
                <Route path="/search" name="Search" element={<Search />} />
                <Route
                  path="/search/:categorySlug"
                  name="Search"
                  Component={Search}
                />
                <Route
                  path="/product-detail/:productSlug/:variantSku"
                  name="Product Detail"
                  Component={ProductDetail}
                />
                <Route path="/login" name="Login" Component={Login} />
                <Route path="/profile" name="Profile" Component={Profile} />
                <Route path="/cart" name="Cart" Component={Cart} />
                {/* <Route path="/cart/payment-info" name="Payment Info" Component={Payment} /> */}
                {/* </Route>
=======
      <ThemeProvider theme={theme} >
      <CssBaseline>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" name="Home" Component={Home} />
              {/* <Route path="/search" name="Search" element={<Search />} /> */}
              <Route path="/search" name="Search" Component={Search} />
              <Route path="/product-detail/:productSlug/:variantSku" name="Product Detail" Component={ProductDetail} />
              <Route path="/login" name='Login' Component={Login}/>
              <Route path="/profile" name='Profile' Component={Profile}/>
              <Route path='/cart' name='Cart' Component={Cart}/>
              {/* <Route path="/cart/payment-info" name="Payment Info" Component={Payment} /> */}
              {/* </Route>
>>>>>>> dev-khang
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
