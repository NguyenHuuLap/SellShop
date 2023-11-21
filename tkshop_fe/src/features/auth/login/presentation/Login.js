import * as React from "react";
import { useNavigate  } from 'react-router-dom';
import {
  Container,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  Input,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Divider,
  styled,
  Link,
} from "@mui/material";
import {
  Google,
  Visibility,
  VisibilityOff,
  Key,
  Facebook,
} from "@mui/icons-material";

import imgLogin from "../../../../assets/images/download.png";
import { alpha } from "@mui/system";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../../actions/UserAction";
const Login = () => {
    const navigate  = useNavigate();

  const Root = styled("div")(({ theme }) => ({
    width: "650px",
    marginTop: "20px",
    ...theme.typography.body2,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const handleLogin = async() =>{
    try{
        const response = await axios.post('http://localhost:3030/auth/login',{
            email: username,
            password: password
        });

    if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('token', data);
        navigate('/')
        // ...
      } else {
        console.error('Login failed with status: ', response.status);
      }
    }catch(e){
        console.error('Login failed: ',e);
    }
  }

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <center>
        <Container sx={{ width: "1200px", marginTop: "15px" }}>
          <Toolbar sx={{ flexDirection: "column" }}>
            <Typography variant="h5" component="div" sx={{ width: "auto" }}>
              Đăng nhập TKMember
            </Typography>
            <img alt="Login" src={imgLogin}></img>
            <TextField
              id="input-with-sx"
              label="Nhập số điện thoại/email"
              variant="standard"
              sx={{ width: "650px", marginBottom: "15px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormControl
              sx={{ m: 1, width: "25ch", width: "650px", marginBottom: "15px" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Container
              sx={{
                width: "700px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link href="#" underline="none" sx={{ fontSize: "14px" }}>
                Quên mật khẩu?
              </Link>
            </Container>
            <Button type="button" onClick={handleLogin} variant="contained">Đăng nhập</Button>
            <Root>
              <Divider>Hoặc đăng nhập bằng</Divider>
            </Root>
            <center>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "12px",
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: alpha("#0000FF", 0.05),
                    borderRadius: "10px",
                    marginLeft: "12px",
                  }}
                >
                  <center>
                    <Button
                      variant="outlined"
                      sx={{ color: "inherit", width: "120px" }}
                      startIcon={<Facebook color="blue" />}
                    >
                      <span style={{ fontSize: "14px" }}>Facebook</span>
                    </Button>
                  </center>
                </Box>
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: alpha("#0000FF", 0.05),
                    borderRadius: "10px",
                    marginLeft: "12px",
                  }}
                >
                  <center>
                    <Button
                      variant="outlined"
                      sx={{ color: "inherit", width: "120px" }}
                      startIcon={<Google color="blue" />}
                    >
                      <span style={{ fontSize: "14px" }}>Google</span>
                    </Button>
                  </center>
                </Box>
              </Container>
            </center>
            <Typography
              component="div"
              sx={{
                width: "auto",
                fontSize: "14px",
                marginTop: "12px",
                marginBottom: "80px",
              }}
            >
              Bạn chưa có tài khoản? Vui lòng{" "}
              <Link href="#" underline="none" sx={{ fontSize: "14px" }}>
                Đăng ký
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </center>
    </>
  );
};
export default Login;
