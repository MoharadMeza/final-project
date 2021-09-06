import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
    formField: {
        billingID,
        fullName,
        address,
        phoneNumber,
        postalCode,
        city,
        state,
        cost,
        date,
        description,
        nationalCode,
        time,
        typeOfDamage,
        necessaryImg1,
        necessaryImg2,
        necessaryImg3,
    }
} = checkoutFormModel;

export default [
    Yup.object().shape({
        [billingID.name]: Yup.number()
            .typeError("لطفا شناسه قبض را بطور صحیح وارد کنید")
            .test("bill", "شناسه قبض باید 10 رقمی باشد", (val) => { if (val) return val.toString().length === 10 })
            .required(`${billingID.requiredErrorMsg}`),
    }),
    Yup.object().shape({
        [fullName.name]: Yup.string().min(5, "این فیلد باید حداقل 5 کاراکتر داشته باشد").required(`${fullName.requiredErrorMsg}`),
        [phoneNumber.name]: Yup.number()
            .test("phone", "شماره تلفن باید 12 رقمی باشد", (val) => { if (val) return val.toString().length === 12 })
            .required(`${phoneNumber.requiredErrorMsg}`),
        [postalCode.name]: Yup.number()
            .typeError("لطفا کدپستی را بطور صحیح وارد کنید")
            .test("postCode", "این فیلد باید حداقل 8 کاراکتر داشته باشد", (val) => { if (val) return val.toString().length > 7 })
            .required(`${postalCode.requiredErrorMsg}`),
        [nationalCode.name]: Yup.number()
            .typeError("لطفا کدملی را بطور صحیح وارد کنید")
            .test("bill", "کدملی باید 10 رقمی باشد", (val) => { if (val) return val.toString().length === 9 })
            .required(`${nationalCode.requiredErrorMsg}`),
        [address.name]: Yup.string().min(7, "این فیلد باید حداقا 7 کاراکتر داشته باشد").required(`${address.requiredErrorMsg}`),
        [city.name]: Yup.string()
            .nullable()
            .required(`${city.requiredErrorMsg}`),
        [state.name]: Yup.string()
            .nullable()
            .required(`${state.requiredErrorMsg}`),
    }),
    Yup.object().shape({
        [necessaryImg1.name]: Yup.mixed()
        .test("fileSize" , "حجم فایل بیشتر از 200 کیلو بایت است" , value => value &&  value.size < 200000)
        .required(`${necessaryImg1.requiredErrorMsg}`),
        [necessaryImg2.name]: Yup.mixed()
        .test("fileSize" , "حجم فایل بیشتر از 200 کیلو بایت است" , value => value &&  value.size < 200000)
        .required(`${necessaryImg2.requiredErrorMsg}`),
        [necessaryImg3.name]: Yup.mixed()
        .test("fileSize" , "حجم فایل بیشتر از 200 کیلو بایت است" , value => value &&  value.size < 200000)
        .required(`${necessaryImg3.requiredErrorMsg}`),
    }),
    Yup.object().shape({
        [date.name]: Yup.object().required(`${date.requiredErrorMsg}`),
        [time.name]: Yup.string().min(5, "زمان را به طور صحیح وارد کنید").required(`${date.requiredErrorMsg}`),
        [typeOfDamage.name]: Yup.string().nullable().required(`${typeOfDamage.requiredErrorMsg}`),
        [description.name]: Yup.string()
            .min(5, "این فیلد باید حداقل 5 کاراکتر داشته باشد").required(`${description.requiredErrorMsg}`),
        [cost.name]: Yup.number()
            .typeError("لطفا مبلغ را بطور صحیح وارد کنید")
            .test("bill", "مبلغ باید حداقل 4 رقمی باشد", (val) => { if (val) return val.toString().length > 4 })
            .required(`${cost.requiredErrorMsg}`),
    }),
];
