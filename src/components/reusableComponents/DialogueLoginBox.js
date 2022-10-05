import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FullWidthTabs from "./BasicTabs";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [valued, setValued] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h3 onClick={handleClickOpen}>Login</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "600",
          }}
          className="text-gray-500 h-580px"
        >
          LOGIN
        </DialogTitle>
        <DialogContent>
          <FullWidthTabs handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
