import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function BasicDatePicker(props) {
  const { value, onChange, fullWidth } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date From"
        value={dayjs(value)}
        onChange={(date) => {
          console.log(date);
          onChange(date.format("MM/DD/YYYY"));
          console.log(date);
        }}
        renderInput={(params) => (
          <TextField name="dateFrom" fullWidth={fullWidth} {...params} />
        )}
      />
    </LocalizationProvider>
  );
}
