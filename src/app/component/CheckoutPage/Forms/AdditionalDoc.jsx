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
        <ul className="mb-5">
            <li>ثبت مدارک خسارت موجب تسریع در بررسی پرونده می شود</li>
            <li>حجم فایل بارگذاری شده نباید بیشتر از 200 کیلوبایت باشد</li>
            <li>ارائه اصل کلیه مدارک و فاکتورها در زمان فراخوان شرکت بیمه الزامیست</li>
            <li>درصورت عدم وجود مدارک و یا حجم بالای آنها می توانید با اصل مدارک به اداره توزیع استان مراجعه کنید</li>
          </ul>
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
