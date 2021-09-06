import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      <Link to="/" className="text-decoration-none">
        <Button variant="contained" color="primary" className="mt-5">
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
