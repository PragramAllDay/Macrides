import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

export default function ResponsiveTimePickers(props) {
  const { value, onChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileTimePicker
          label="Timer"
          value={value}
          sx={{ borderRadius: "0" }}
          onChange={onChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
