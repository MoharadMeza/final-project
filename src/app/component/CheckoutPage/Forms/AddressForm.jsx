import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';
export default function AddressForm(props) {
  const {
    formField: {
      billingID,
    }
  } = props;
  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography component="p" gutterBottom>
        شناسه قبض برق محلی را که خسارت در آنجا رخ داده است وارد کنید
      </Typography>
      </Box>
      
      <Grid container>
        <Grid item xs={12} sm={12}>
          <InputField name={billingID.name} label={billingID.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
