import React, { useState } from 'react';
import MaterialLayout from './Layout/MaterialLayout';
import { Button, Typography, TextField, Grid, CircularProgress } from '@material-ui/core';
import { Formik, Form } from 'formik';
import useStyles from './CheckoutPage/styles'
import { sendSuggestions } from '../services/formService';
import * as Yup from 'yup'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputField } from './FormFields';

const phoneRegEx = /(\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/
const vlidationSchema = () => 
    Yup.object({
        email: Yup.string()
        .email("ایمیل وارد شده صحیح نمی باشد")
        .required("این فیلد الزامیست"),
        phone_number: Yup.string().matches(phoneRegEx, "شماره همراه وارد شده صحیح نمی باشد").max(13 , "شماره همراه وارد شده صحیح نمی باشد"),
        full_name : Yup.string().required("این فیلد الزامیست"),
    })


const CriticsSuggestions = () => {
    const [showModal, setShowModal] = useState(false)
    const classes = useStyles()
    const formInitialValues = {
        email: '',
        phone_number: '',
        full_name: '',
        description: ''
    }
    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
    const toastify = () => {
        return (
            toast.error('درخواست با مشکل مواجه شد !', {
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
        if (suggestions.status === 201)
            handleShow()
        else {
            toastify()
        }
    }
    return (
        <MaterialLayout>
            <Typography component="p" variant="h3" align="center">
                شکایات، انتقادات و پیشنهادات
            </Typography>
            <Formik
                initialValues={formInitialValues}
                onSubmit={_submitForm}
                validationSchema={vlidationSchema}
            >
                {({
                    isSubmitting,
                    setFieldValue,
                    values,
                    errors
                }) => (
                    <Form>
                        <Modal show={showModal} onHide={handleClose} size="lg">
                            <Modal.Header className="text-dark h3">
                                نظر شما با موفقیت ثبت شد
                            </Modal.Header>
                            <Modal.Body className="text-dark h5">
                                مشترک گرامی شکایت شما در سامانه ثبت شد. ازاینکه مارا با پیشنهادات و انتقادات خود یاری میکنید متشکریم
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    بستن
                                </button>
                            </Modal.Footer>
                        </Modal>
                        <Grid container>
                            <Grid item lg={5} sm={12} className="my-5 mt-10 ms-auto">
                                <InputField name="email" label="ایمیل" fullWidth />
                            </Grid>
                            <Grid item lg={5} sm={12} className="my-5 mt-10 ms-auto">
                                <InputField name="full_name" label="نام و نام خانوادگی" fullWidth/>
                            </Grid>
                            <Grid item lg={5} sm={12} className="my-5">
                                <InputField dir="ltr" name="phone_number" label="شماره تلفن" fullWidth/>
                            </Grid>
                            <Grid item lg={12} sm={12}>
                                <label htmlFor="description" className="mb-3">توضیحات خود را اینجا بنویسید</label>
                                <textarea id="description" rows={5} className="form-control w-100" name={values.description} onChange={(value) => {
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
                                    />
                                }
                                {isSubmitting && (
                                    <CircularProgress
                                        size={24}
                                        className={classes.buttonProgress}
                                    />
                                )}
                            </Grid>
                        </Grid>

                    </Form>
                )}
            </Formik>
        </MaterialLayout>
    )
}
export default CriticsSuggestions