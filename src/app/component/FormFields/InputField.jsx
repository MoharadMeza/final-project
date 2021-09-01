import React, { useState } from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import InputMask from "react-input-mask"
import "./styles.css"


export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta, helpers] = useField(props.name);
  const { setValue, setTouched } = helpers
  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }
  let formatChars = {
    '1': '[0-2]',
    '2': '[0-9]',
    '3': '[0-5]',
    '4': '[0-9]'
  };

  let phoneFormatChar = {
    '1': '9',
    '2': '[0-9]'
  }
  let beforeMaskedValueChange = (newState) => {
    let { value } = newState;

    if (value.startsWith('2'))
      formatChars['2'] = '[0-3]'; // To block 24, 25, etc.
    else
      formatChars['2'] = '[0-9]'; // To allow 05, 12, etc.
    return { value, selection: newState.selection };
  }
  let beforePhoneMaskedValueChange = (newState) => {
    let { value } = newState;

    if (value.startsWith('2'))
      phoneFormatChar['2'] = '9';
    else
      phoneFormatChar['2'] = '[0-9]';
    return { value, selection: newState.selection };
  }

  if (!props.uploadfile)
    if (field.name === "time")
      return (
        <InputMask
          dir="ltr"
          mask="12:34"
          error={meta.touched && meta.error && true}
          helperText={_renderHelperText()}
          formatChars={formatChars}
          beforeMaskedValueChange={beforeMaskedValueChange}
          {...field}
          {...rest}
        >
          {innerProps => <TextField {...innerProps} />}
        </InputMask>
      )
    else if (field.name === "phoneNumber")
      return (
        <InputMask
          dir="ltr"
          mask="+981222222222"
          maskChar=""
          error={meta.touched && meta.error && true}
          helperText={_renderHelperText()}
          formatChars={phoneFormatChar}
          beforeMaskedValueChange={beforePhoneMaskedValueChange}
          {...field}
          {...rest}
        >
          {innerProps => <TextField {...innerProps} />}
        </InputMask>
      )
    else
      return (
        <TextField
          dir={field.name === "phoneNumber" ? "ltr" : "rtl"}
          type="text"
          error={meta.touched && meta.error && true}
          helperText={_renderHelperText()}
          {...field}
          {...rest}
          InputProps={
            field.name === "cost" ?
              {
                endAdornment: <InputAdornment position="end" variant="h1">
                  <Typography>
                    ریال
                  </Typography>
                </InputAdornment>
              } : null
          }
        />
      );
  else return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <div className="input-group-append">
          <span>
            {rest.label}
          </span>
        </div>
      </div>
      <div className="col custom-file d-flex">
        <Button variant="contained" color="primary" component="label">
          بارگذاری
          <input id={field.name} type="file" accept=".png,.jpg,.pdf" fullWidth hidden onChange={(event) => {
            setTouched(true)
            setValue(event.target.files[0])
          }} />
        </Button>
        <label className={`input-file-label${(meta.touched && meta.error) ? "-invalid" : ""}`} htmlFor={field.name} dir="ltr">
          {field.value ? field.value.name : null}
        </label>
      </div>
    </div>
  )
}
