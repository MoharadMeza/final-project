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
          <ul className="mb-5">
            <li>الصاق نمودن مدارک ذیل جهت تشکیل اولیه پرونده الزامی میباشد</li>
            <li>حجم فایل بارگذاری شده نباید بیشتر از 200 کیلوبایت باشد</li>
            <li>ارائه اصل کلیه مدارک و فاکتورها در زمان فراخوان شرکت بیمه الزامیست</li>
          </ul>
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
