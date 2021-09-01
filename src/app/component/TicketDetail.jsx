import React, { useState } from 'react';
import MaterialLayout from './Layout/MaterialLayout';
import { Button, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { CircularProgress } from '@material-ui/core';
import useStyles from './CheckoutPage/styles'
import DamageStatus from './DamegeStatus';
import { getStatus } from '../services/formService';

const url = "http://localhost:9898/api/v1/damage-reports/track/"

const TicketAdd = () => {
    const [response, setResponse] = useState()
    const classes = useStyles()
    const formInitialValues = {
        billing_id: '',
        tracking_code: ''
    }
    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function getDamageInfo(formData){
        let info = await getStatus(formData)
        return info
    }
    async function _submitForm(values) {
        await _sleep(1000);
        let formData = new FormData()
        console.log(values);
        formData.append("billing_id", values.billing_id)
        formData.append("unique_id", values.tracking_code)
        const status = await getDamageInfo(formData)
        setResponse(status)
    }
    return (
        <MaterialLayout>
            <Typography component="p" variant="h3" align="center">
                مشاهده پرونده
            </Typography>
            <Formik
                initialValues={formInitialValues}
                onSubmit={_submitForm}
            >
                {({
                    isSubmitting,
                    setFieldValue,
                    values
                }) => (
                    <Form>
                        {
                            response ? <DamageStatus formData={response}/>
                                : <Grid container>
                                    <Grid item lg={12} sm={12} className="my-5 mt-10">
                                        <TextField name={values.billing_id} label="شناسه قبض" fullWidth onChange={(value) => {
                                            setFieldValue("billing_id", value.target.value)
                                        }} />
                                    </Grid>
                                    <Grid item lg={12} sm={12} className="my-5">
                                        <TextField name={values.tracking_code} label="کد رهگیری" fullWidth onChange={(value) => {
                                            setFieldValue("tracking_code", value.target.value)
                                        }} />
                                    </Grid>
                                    <Grid item lg={12} sm={12} className="m-5">
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            ادامه
                                        </Button>
                                        {isSubmitting && (
                                            <CircularProgress
                                                size={24}
                                                className={classes.buttonProgress}
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                        }
                    </Form>
                )}
            </Formik>
        </MaterialLayout>
    )
}
export default TicketAdd