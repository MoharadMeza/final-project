import React from "react"
import { converToSh } from "../utils/convertDateFormat"
import { Typography, Grid, Box } from "@material-ui/core"
import { status } from "../enums/messages"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function DamageStatus({ formData }) {
    const date = new Date(formData.created_at * 1000)
    const created_at = date.toLocaleDateString()
    const d = created_at.split("/").reverse()
    return (
        <React.Fragment>
            <Typography variant="p" component="h4" gutterBottom>
                اطلاعات درخواست شما
            </Typography>
            <Grid container spacing={2} className="mt-3">
                <Grid sm={12} lg={6} item component="h6">
                    {` نام و نام خانوادگی : ${formData.user.full_name}`}
                </Grid>
                <Grid sm={12} lg={6} item component="h6">
                    {` کدملی : ${formData.user.national_code}`}
                </Grid>
                <Grid sm={12} lg={12} item component="h6">
                    {`آدرس : ${formData.user.province}-${formData.user.city}-${formData.user.address}`}
                </Grid>
                <Grid sm={12} lg={5} item component="h6">
                    {`شناسه قبض محل حادثه : ${formData.billing_id}`}
                </Grid>
                <Grid sm={12} lg={4} item component="h6">
                    {`تاریخ وقوع حادثه: ${converToSh(formData.date)}`}
                </Grid>

                <Grid sm={12} lg={3} item component="h6">
                    {` نوع خسارت : ${formData.type_of_damage.title}`}
                </Grid>
                <Grid sm={12} lg={9} item component="h6">
                    {` شرح حادثه : ${formData.description}`}
                </Grid>

                <Grid sm={12} lg={6} item component="h6">
                    {`مبلغ برآرودی خسارت : ${formData.amount_of_damages}`}
                </Grid>
                <Grid sm={12} lg={6} item component="h6">
                    {`تاریخ ثبت خسارت : ${converToSh(`${d[0]}/${d[2]}/${d[1]}`)}`}
                </Grid>
                <Box my={3}>
                    <Grid sm={12} lg={12} item component="h5">
                        {`وضعیت پرونده : ${status[formData.status - 1].label}`}
                    </Grid>
                </Box>
            </Grid>
            <Link to="/" className="text-decoration-none">
                <Button variant="contained" color="primary" className="mt-5">
                    بازگشت به صفحه اصلی
                </Button>
            </Link>
        </React.Fragment>
    )
}