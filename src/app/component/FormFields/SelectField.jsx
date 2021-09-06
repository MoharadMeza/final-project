import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField, useFormikContext } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import provinces from '../../enums/json/provinces.json'


function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta,] = useField(props);
  const { value: selectedValue } = field;
  const {setFieldValue , values} = useFormikContext()
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _findProvinceId(province) {
    return provinces.find((item) => {
      if (item.name === province)
        return item
    })
  }

  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }
  if (field.name === "state")
    return (
      <FormControl {...rest} error={isError}>
        <InputLabel>{label}</InputLabel>
        <Select {...field} value={selectedValue ? selectedValue : ''} onChange={(input)=>{
          setFieldValue("state",input.target.value);
          setFieldValue("city" , null)
        }}>
          {data.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {_renderHelperText()}
      </FormControl>
    );
  else if (field.name === "city")
    return (
      <FormControl {...rest} error={isError} >
        <InputLabel>{label}</InputLabel>
        <Select {...field} value={selectedValue ? selectedValue : ''} >
          {data.map((item, index) => {
            if (values.state) {
              let province = _findProvinceId(values.state)
              if (item.province_id === province.id) {
                return (
                  <MenuItem key={index} value={item.slug}>
                    {item.name}
                  </MenuItem>
                )
              }
            }
          })
          }
        </Select>
        {_renderHelperText()}
      </FormControl>
    )
  else
    return (
      <FormControl {...rest} error={isError}>
        <InputLabel>{label}</InputLabel>
        <Select {...field} value={selectedValue ? selectedValue : ''} >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {_renderHelperText()}
      </FormControl>
    )
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;
