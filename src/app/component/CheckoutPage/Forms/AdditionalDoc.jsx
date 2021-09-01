import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';
export default function AdditionalDoc(props) {
  const {
    formField: {
      facture1,
      facture2,
      facture3
    }
  } = props;
  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography variant="p" gutterBottom>
          شناسه قبض برق محلی را که خسارت در آنجا رخ داده است وارد کنید
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={12}>
          <InputField uploadfile name={facture1.name} label={facture1.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField uploadfile name={facture2.name} label={facture2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField uploadfile name={facture3.name} label={facture3.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
