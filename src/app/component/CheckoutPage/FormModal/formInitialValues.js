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
        facture1,
        facture2,
        facture3
    }
} = checkoutFormModel;

export default {
    [billingID.name]: '',
    [fullName.name]: '',
    [address.name]: '',
    [postalCode.name]: '',
    [phoneNumber.name]: '',
    [state.name]: '',
    [city.name]: '',
    [cost.name]: '',
    [time.name]: '',
    [description.name]: '',
    [typeOfDamage.name]: '',
    [nationalCode.name]: '',
    [date.name]: '',
    [necessaryImg1.name]:'',
    [necessaryImg2.name]:'',
    [necessaryImg3.name]:'',
    [facture1.name]: '',
    [facture2.name]: '',
    [facture3.name]: '',
};
