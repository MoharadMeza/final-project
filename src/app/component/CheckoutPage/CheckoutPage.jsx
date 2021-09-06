import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import AddressForm from './Forms/AddressForm';
import UserInfo from './Forms/UserInfo';
import ReviewOrder from './ReviewOrder/ReviewOrder';
import BasicDoc from './Forms/BasicDoc';
import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModal/validationSchema';
import checkoutFormModel from './FormModal/checkoutFormModel';
import formInitialValues from './FormModal/formInitialValues';
import IncidentDetails from './Forms/IncidentDetails'
import AdditionalDoc from './Forms/AdditionalDoc';
import useStyles from './styles';
import { generateFormData } from '../../utils/generateFormData';
import { postDamageInfo } from '../../services/formService';

const steps = ['شناسه قبض', 'کاربری محل', 'مدارک اولیه', 'جزئیات حادثه ', 'مدارک تکمیلی', 'تاییدیه درخواست'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <UserInfo formField={formField} />;
    case 2:
      return <BasicDoc formField={formField} />;
    case 3:
      return <IncidentDetails formField={formField} />;
    case 4:
      return <AdditionalDoc formField={formField} />;
    case 5:
      return <ReviewOrder formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [trackingCode, setTrackingCode] = useState("")
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getUniqeId (formData) {
    let uniqe_id = await postDamageInfo(formData)
    return uniqe_id
  }
  async function _submitForm(values, actions) {
    await _sleep(1000);
    let formData = generateFormData(values)
    let response = await getUniqeId(formData)
    setTrackingCode(response)
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    console.log(values);
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="p" variant="h3" align="center">
        اعلام خسارت
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess track={trackingCode} />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      قبلی
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'ارسال درخواست' : 'بعدی'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}