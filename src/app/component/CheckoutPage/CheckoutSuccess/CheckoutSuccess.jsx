import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess(props) {
  console.log(props.track);
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        درخواست شما ثبت شد
      </Typography>
      <Typography variant="subtitle1">
        کاربر گرامی درخواست شما با موفقیت در سامانه ثبت شد. شما میتوانید با استفاده از کد رهگیری در قسمت پیگیری خسارت از وضعیت درخواست خود مطلع شوید
      </Typography>
      <Typography variant="subtitle1">
        {`کد رهگیری شما : ${props.track}`}
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
