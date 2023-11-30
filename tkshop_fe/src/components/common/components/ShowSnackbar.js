import React from "react";
import { Alert, Snackbar } from "@mui/material";

const ShowSnackbar = ({isOpen, snackbarMessage}) => {
    const [openSnackbar, setOpenSnackbar] = React.useState(isOpen);
    React.useEffect(() => {
      setOpenSnackbar(isOpen);
    }, [isOpen]);
  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={
            snackbarMessage.includes("thành công") ? "success" : "error"
          }
          sx={{ width: "350px" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ShowSnackbar;