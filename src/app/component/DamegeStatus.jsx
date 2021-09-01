import React from "react"
import { converToGe } from "../utils/convertDateFormat"
import { Typography , Grid } from "@material-ui/core"

export default function DamageStatus({formData}) {
    console.log(formData);
    return (
        <React.Fragment>
            <Typography variant="p" component="h4" gutterBottom>
                اطلاعات درخواست شما
            </Typography>
            <Grid container spacing={2} className="mt-3">
                <Grid sm={12} lg={6} item component="h6">
                    {`شناسه قبض محل حادثه : ${formData.billing_id}`}
                </Grid>
                <Grid sm={12} lg={6} item component="h6">
                    {` نام و نام خانوادگی : ${formData.user.full_name}`}
                </Grid>
                <Grid sm={12} lg={6} item component="h6">
                    {` کدملی : ${formData.user.national_code}`}
                </Grid>
                <Grid sm={12} lg={6} item component="h6">
                    {` شماره تلفن : ${formData.user.phone_number}`}
                </Grid>

                <Grid sm={12} lg={12} item component="h6">
                    {`آدرس : ${formData.user.province}-${formData.user.city}-${formData.user.address}`}
                </Grid>

                <Grid sm={12} lg={4} item component="h6">
                    {`کدپستی : ${formData.user.postal_code}`}
                </Grid>
                <Grid sm={12} lg={4} item component="h6">
                    {`تاریخ وقوع حادثه: ${converToGe(formData.date)}`}
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
            </Grid>
        </React.Fragment>
    )
}