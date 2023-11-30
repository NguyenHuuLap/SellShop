import * as React from "react";
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
  FormControlLabel,
  Checkbox,
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

const Register = () => {
  const Root = styled("div")(({ theme }) => ({
    width: "650px",
    marginTop: "20px",
    ...theme.typography.body2,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordsMatch = password === confirmPassword;
  return (
    <>
      <center>
        <Container sx={{ width: "1200px", marginTop: "15px" }}>
          <Toolbar sx={{ flexDirection: "column" }}>
            <Typography variant="h5" component="div" sx={{ width: "auto" }}>
              Đăng ký TKMember
            </Typography>
            <img alt="Login" src={imgLogin}></img>

            {/* Nhập họ và tên */}
            <TextField
              id="input-with-sx"
              label="Nhập họ và tên"
              variant="standard"
              sx={{
                ".MuiInputLabel-root": { fontSize: "14px" },
                width: "650px",
                marginBottom: "8px",
              }}
            />

            {/* Nhập email */}
            <TextField
              id="input-with-sx"
              label="Nhập email"
              variant="standard"
              sx={{
                ".MuiInputLabel-root": { fontSize: "14px" },
                width: "650px",
                marginBottom: "8px",
              }}
            />

            {/* Nhập số điện thoại */}
            <TextField
              id="input-with-sx"
              label="Nhập số điện thoại"
              variant="standard"
              sx={{
                ".MuiInputLabel-root": { fontSize: "14px" },
                width: "650px",
                marginBottom: "8px",
              }}
            />

            {/* Mật khẩu */}
            <FormControl
              sx={{ m: 1, width: "25ch", width: "650px" }}
              variant="standard"
            >
              <InputLabel
                sx={{ fontSize: "14px" }}
                htmlFor="standard-adornment-password"
                error={!passwordsMatch}
              >
                Mật khẩu
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
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

            {/* Ghi chú */}
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                marginRight: "455px",
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              Ghi chú: Điền vào mật khẩu của bạn.
            </Typography>

            {/* Xác nhận lại mật khẩu */}
            <FormControl sx={{ m: 1, width: "650px" }} variant="standard">
              <InputLabel
                sx={{ fontSize: "14px" }}
                htmlFor="standard-adornment-password"
                error={!passwordsMatch}
              >
                Nhập lại mật khẩu
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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
            {!passwordsMatch && (
              <Typography
                variant="body2"
                color="error"
                sx={{
                  marginRight: "535px",
                  marginBottom: "14px",
                  fontSize: "12px",
                }}
              >
                Mật khẩu không khớp
              </Typography>
            )}

            <FormControlLabel
              control={<Checkbox size="small" defaultChecked />}
              label={
                <Typography sx={{ fontSize: "13px" }}>
                  Tôi đồng ý với các điều khoản bảo mật cá nhân
                </Typography>
              }
              sx={{ marginRight: "350px" }}
            />

            <Button
              sx={{ width: "650px", marginTop: "14px" }}
              variant="contained"
            >
              Đăng ký
            </Button>
            <Root>
              <Divider>Hoặc đăng ký bằng</Divider>
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
              Bạn đã có tài khoản?{" "}
              <Link href="#" underline="none" sx={{ fontSize: "14px" }}>
                Đăng nhập
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </center>
    </>
  );
};
export default Register;
