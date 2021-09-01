// import React, { useState, useEffect } from 'react';
// import { useField } from 'formik';
// import Grid from '@material-ui/core/Grid';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';
// import DateFnsUtils from '@date-io/date-fns';
// import 'date-fns'

import moment from "moment";
import jMoment from "moment-jalaali";
import React, { useState } from "react";
import JalaliUtils from "@date-io/jalaali";
import {
  TimePicker,
  DateTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });


export default function DatePickerField(props) {
  const [selectedDate, handleDateChange] = useState(moment());

  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <DatePicker
        clearable
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  )

  // const [field, meta, helper] = useField(props);
  // const { touched, error } = meta;
  // const { setValue } = helper;
  // const isError = touched && error && true;
  // const { value } = field;
  // const [selectedDate, setSelectedDate] = useState(null);

  // useEffect(() => {
  //   if (value) {
  //     const date = new Date(value);
  //     setSelectedDate(date);
  //   }
  // }, [value]);

  // function _onChange(date) {
  //   if (date) {
  //     setSelectedDate(date);
  //     try {
  //       const ISODateString = date.toISOString();
  //       setValue(ISODateString);
  //     } catch (error) {
  //       setValue(date);
  //     }
  //   } else {
  //     setValue(date);
  //   }
  // }

  // return (
  //   <Grid container>
  //     <MuiPickersUtilsProvider utils={PersianUtils}>
  //       <KeyboardDatePicker
  //         {...field}
  //         {...props}
  //         value={selectedDate}
  //         onChange={_onChange}
  //         error={isError}
  //         invalidDateMessage={isError && error}
  //         helperText={isError && error}
  //       />
  //     </MuiPickersUtilsProvider>
  //   </Grid>
  // );
}
