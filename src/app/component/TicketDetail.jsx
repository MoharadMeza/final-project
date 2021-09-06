import React, { useState } from 'react';
import MaterialLayout from './Layout/MaterialLayout';
import { TextField, CircularProgress, Grid, Button, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import useStyles from './CheckoutPage/styles'
import DamageStatus from './DamegeStatus';
import { getStatus } from '../services/formService';
import { ToastContainer, toast } from 'react-toastify';
import { InputField } from './FormFields';
import * as Yup from "yup"
import 'react-toastify/dist/ReactToastify.css';

const vlidationSchema = () =>
    Yup.object({
        billing_id: Yup.number()
            .typeError("لطفا شناسه قبض را بطور صحیح وارد کنید")
            .test("bill", "شناسه قبض باید 10 رقمی باشد", (val) => { if (val) return val.toString().length === 10 })
            .required("این فیلد الزامیست"),
        tracking_code: Yup.string()
            .required("این فیلد الزامیست"),
    })
const TicketAdd = () => {
    const [response, setResponse] = useState()
    const classes = useStyles()
    const formInitialValues = {
        billing_id: '',
        tracking_code: ''
    }

    const toastify = () => {
        return (
            toast.error('خسارتی با مشخصات وارد شده یافت نشد !', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                // onClose : setShowToast(false)
            })
        )
    }


    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function getDamageInfo(formData) {
        let info = await getStatus(formData)
        return info
    }
    async function _submitForm(values) {
        await _sleep(1000);
        let formData = new FormData()
        formData.append("billing_id", values.billing_id)
        formData.append("unique_id", values.tracking_code)
        const status = await getDamageInfo(formData)
        console.log(status);
        if (status.message !== "404") {
            setResponse(status)
        }
        else {
            toastify()
        }
    }
    return (
        <MaterialLayout>
            <Typography component="p" variant="h3" align="center">
                مشاهده پرونده
            </Typography>
            <Formik
                initialValues={formInitialValues}
                validationSchema={vlidationSchema}
                onSubmit={_submitForm}
            >
                {formik => {
                    const {
                        handleSubmit,
                        values,
                        setFieldValue,
                        setFieldTouched,
                    } = formik

                    return (
                        <Form>
                            {
                                response ? <DamageStatus formData={response} />
                                    : <Grid container>
                                        <Grid item lg={12} sm={12} className="my-5 mt-10">
                                            <InputField name="billing_id" label="شناسه قبض" fullWidth />
                                        </Grid>
                                        <Grid item lg={12} sm={12} className="my-5">
                                            <InputField name="tracking_code" label="کد رهگیری" fullWidth />
                                        </Grid>
                                        <Grid item lg={12} sm={12} className="m-5">
                                            <Button
                                                disabled={formik.isSubmitting || !formik.isValid}
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                            >
                                                ادامه
                                            </Button>
                                            {
                                                toast && <ToastContainer
                                                    position="bottom-right"
                                                    autoClose={4000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                />}
                                            {formik.isSubmitting && (
                                                <CircularProgress
                                                    size={50}
                                                    className={classes.buttonProgress}
                                                />
                                            )}

                                        </Grid>
                                    </Grid>
                            }
                        </Form>
                    )
                }
                }
            </Formik>
        </MaterialLayout>
    )
}
export default TicketAdd