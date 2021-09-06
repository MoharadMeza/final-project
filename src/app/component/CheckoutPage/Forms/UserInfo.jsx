import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../FormFields';
import { Box } from '@material-ui/core';
import provinces from '../../../enums/json/provinces.json'
import cities from '../../../enums/json/cities.json'
export default function UserInfo(props) {
  const {
    formField: {
      fullName,
      address,
      phoneNumber,
      postalCode,
      nationalCode,
      city,
      state, }
  } = props;
  // const { values , setFieldValue } = useFormikContext()
  // const p = useMemo(() => {
  //   setFieldValue("city" , "")
  //   return values.state
  // }, [values.state])
  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography component="p" gutterBottom>
          کابری محل
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={fullName.name}
            label={fullName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={nationalCode.name}
            label={nationalCode.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={phoneNumber.name}
            label={phoneNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>

          <SelectField
            name={state.name}
            label={state.label}
            data={provinces}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <InputField name={address.name} label={address.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputField name={postalCode.name} label={postalCode.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
