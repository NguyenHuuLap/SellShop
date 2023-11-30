import { EditNoteOutlined } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../actions/UserAction.js";
import axios from "axios";
import Cookies from "js-cookie";
import ShowSnackbar from "../../../components/common/components/ShowSnackbar.js";

const MyAccount = () => {
  const user = useSelector((state) => state.user.user);
  const formattedDate = format(new Date(user.createdAt), "dd/MM/yyyy");
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [editFields, setEditFields] = useState({
    ho: false,
    ten: false,
    diaChi: false,
  });
  const [editedData, setEditedData] = useState({
    ho: user.lastname,
    ten: user.firstname,
    diaChi: user.address,
  });

  const handleEdit = (field) => {
    setEditFields((prevEditFields) => ({
      ...prevEditFields,
      [field]: !prevEditFields[field],
    }));
  };
  const handleChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3030/user/${user._id}`,
        {
          firstname: editedData.ten,
          lastname: editedData.ho,
          address: editedData.diaChi,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        dispatch(updateUser(response.data));
        setShowSnackbar(true);
      }
    } catch (err) {
      console.log("Err: ", err);
    }
    setEditFields({
      ho: false,
      ten: false,
      diaChi: false,
    });
  };

  const dataFields = [
    { label: "Họ", value: editedData.ho, field: "ho" },
    { label: "Tên", value: editedData.ten, field: "ten" },
    { label: "Địa chỉ", value: editedData.diaChi, field: "diaChi" },
  ];

  return (
    <Grid
      container
      item
      sx={{ position: "relative" }}
      spacing={2}
      marginBottom={80}
    >
      <Grid
        item
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          width: "900px",
        }}
      >
        <Avatar src={user.avatar} sx={{ height: "100px", width: "100px" }} />
        <Typography>{user.firstname + " " + user.lastname}</Typography>
        {dataFields.map(({ label, value, field }) => (
          <TextField
            key={field}
            label={label + ": " + value}
            variant="standard"
            sx={{ width: "650px", marginBottom: "15px" }}
            disabled={!editFields[field]}
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleEdit(field)}>
                  <EditNoteOutlined />
                </IconButton>
              ),
            }}
          />
        ))}

        {/* Email */}
        <TextField
          id="input-email"
          label={"Email: " + user.email}
          variant="standard"
          disabled
          sx={{ width: "650px", marginBottom: "15px" }}
        />

        {/* Ngày tham gia */}
        <TextField
          id="input-ngay-tham-gia"
          label={"Ngày tham gia: " + formattedDate}
          disabled
          variant="standard"
          sx={{ width: "650px", marginBottom: "30px" }}
        />
        <Button
          sx={{
            width: "650px",
            textTransform: "none",
            backgroundColor: "#1976d2",
            color: "white",
            "&:hover": { backgroundColor: "#1976d2" },
          }}
          onClick={handleSave}
        >
          Cập nhật thông tin
        </Button>
      </Grid>
      {showSnackbar && (
        <ShowSnackbar
          isOpen={true}
          snackbarMessage="Đã cập nhật thông tin thành công!"
        />
      )}
    </Grid>
  );
};

export default MyAccount;
