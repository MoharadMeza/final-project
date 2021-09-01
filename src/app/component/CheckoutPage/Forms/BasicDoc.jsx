import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';
export default function BasicDoc(props) {
  const {
    formField: {
      necessaryImg1,
      necessaryImg2,
      necessaryImg3
    }
  } = props;
  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography component="p">
          شناسه قبض برق محلی را که خسارت در آنجا رخ داده است وارد کنید
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={12}>
          <InputField uploadfile name={necessaryImg1.name} label={necessaryImg1.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField uploadfile name={necessaryImg2.name} label={necessaryImg2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField uploadfile name={necessaryImg3.name} label={necessaryImg3.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
