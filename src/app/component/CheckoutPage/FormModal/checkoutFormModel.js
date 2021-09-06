export default {
    formId: 'checkoutForm',
    formField: {
        billingID: {
            name: 'billingID',
            label: 'شناسه قبض',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        fullName: {
            name: 'fullName',
            label: ' نام و نام خانوادگی',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        nationalCode: {
            name: 'nationalCode',
            label: 'کد ملی',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        phoneNumber: {
            name: 'phoneNumber',
            label: 'شماره همراه',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        state:{
            name: 'state',
            label : 'استان',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        city: {
            name: 'city',
            label: 'شهر',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        address: {
            name: 'address',
            label: 'آدرس',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        postalCode:{
            name:'postalCode',
            label:'کدپستی',
            requiredErrorMsg: 'این فیلد الزامیست'
        },
        necessaryImg1: {
            name: 'last_bill_image',
            label: 'تصویر آخرین قبض پرداختی با آخرین تصویر پیامک صورتحساب قبض برق',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        necessaryImg2: {
            name: 'national_card_image',
            label: 'تصویرکارت ملی',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        necessaryImg3: {
            name: 'ownership_doc_image',
            label: 'سند مالکیت یا اجاره نامه محل خسارت',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        date:{
            name: 'date',
            label: 'تاریخ حادثه',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        time:{
            name: 'time',
            label: 'زمان حادثه',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        typeOfDamage:{
            name: 'typeOfDamage',
            label: 'نوع خسارت',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        description:{
            name: 'description',
            label: 'شرح حادثه',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        cost:{
            name: 'cost',
            label: 'هزینه برآوردی خسارت',
            requiredErrorMsg: 'این فیلد الزامیست',
        },
        facture1:{
            name: 'facture1',
            label: 'تصویر محل حادثه',
        },
        facture2:{
            name: 'facture2',
            label: 'تصویر فاکتور فروشگاه یا تعمیرگاه مجاز 1',
        },
        facture3:{
            name: 'facture3',
            label: 'تصویر فاکتور فروشگاه یا تعمیرگاه مجاز 2',
        },
        
    }
};
