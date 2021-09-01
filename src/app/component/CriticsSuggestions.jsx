import React, { useState } from 'react';
import MaterialLayout from './Layout/MaterialLayout';
import { Button, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { CircularProgress } from '@material-ui/core';
import useStyles from './CheckoutPage/styles'
import DamageStatus from './DamegeStatus';
import { sendSuggestions } from '../services/formService';

const CriticsSuggestions = () => {
    const [response, setResponse] = useState()
    const classes = useStyles()
    const formInitialValues = {
        email: '',
        phone_number: '',
        full_name:'',
        description: ''
    }
    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function _submitForm(values) {
        console.log(values);
        await _sleep(1000);
        let formData = new FormData()
        formData.append("email", values.email)
        formData.append("phone_number", values.phone_number)
        formData.append("full_name", values.full_name)
        formData.append("description", values.description)
        const suggestions = await sendSuggestions(formData)
        console.log(suggestions);
    }
    return (
        <MaterialLayout>
            <Typography component="p" variant="h3" align="center">
                شکایات، انتقادات و پیشنهادات
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
                            response ? <DamageStatus formData={response} />
                                : <Grid container>
                                    <Grid item lg={5} sm={12} className="my-5 mt-10 ms-auto">
                                        <TextField name={values.email} label="ایمیل" fullWidth onChange={(value) => {
                                            setFieldValue("email", value.target.value)
                                        }} />
                                    </Grid>
                                    <Grid item lg={5} sm={12} className="my-5 mt-10 ms-auto">
                                        <TextField name={values.full_name} label="نام و نام خانوادگی" fullWidth onChange={(value) => {
                                            setFieldValue("full_name", value.target.value)
                                        }} />
                                    </Grid>
                                    <Grid item lg={5} sm={12} className="my-5">
                                        <TextField name={values.phone_number} label="شماره تلفن" fullWidth onChange={(value) => {
                                            setFieldValue("phone_number", value.target.value)
                                        }} />
                                    </Grid>
                                    <Grid item lg={12} sm={12}>
                                        <label htmlFor="description" className="mb-3">توضیحات خود را اینجا بنویسید</label>
                                        <textarea id="description" rows={8} className="form-control w-100" name={values.description} onChange={(value) => {
                                            setFieldValue("description", value.target.value)
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
                                            ثبت
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
export default CriticsSuggestions