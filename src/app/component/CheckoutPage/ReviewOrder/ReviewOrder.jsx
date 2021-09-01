import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="p" component="h4" gutterBottom>
        تاییدیه درخواست
      </Typography>
      <Grid container spacing={2} className="mt-3">
        <Grid sm={12} lg={6} item component="h6">
          {`شناسه قبض محل حادثه : ${formValues.billingID}`}
        </Grid>
        <Grid sm={12} lg={6} item component="h6">
          {` نام و نام خانوادگی : ${formValues.fullName}`}
        </Grid>
        <Grid sm={12} lg={6} item component="h6">
          {` کدملی : ${formValues.nationalCode}`}
        </Grid>
        <Grid sm={12} lg={6} item component="h6">
          {` شماره تلفن : ${formValues.phoneNumber}`}
        </Grid>

        <Grid sm={12} lg={12} item component="h6">
          {`آدرس : ${formValues.state}-${formValues.city}-${formValues.address}`}
        </Grid>

        <Grid sm={12} lg={4} item component="h6">
          {` کدپستی : ${formValues.postalCode}`}
        </Grid>
        <Grid sm={12} lg={4} item component="h6">
          {formValues.date ? ` تاریخ : ${formValues.date.day}-${formValues.date.month}-${formValues.date.year}` : ""}
        </Grid>
        <Grid sm={12} lg={4} item component="h6">
          {` زمان : ${formValues.time}`}
        </Grid>

        <Grid sm={12} lg={3} item component="h6">
          {` نوع خسارت : ${formValues.typeOfDamage}`}
        </Grid>
        <Grid sm={12} lg={9} item component="h6">
          {` شرح حادثه : ${formValues.description}`}
        </Grid>

        <Grid sm={12} lg={6} item component="h6">
          {`مبلغ برآرودی خسارت : ${formValues.cost}`}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
