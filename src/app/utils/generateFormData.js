import { converToGe } from "./convertDateFormat";
export function generateFormData(values) {
    let form = {
        user: {}
    }
    const formData = new FormData()
    const keys = Object.keys(values)
    // const value = Object.values(values)
    keys.forEach((key, index) => {
        switch (key) {
            case "billingID":
                // form['billing_id'] = values[`${key}`]
                formData.append('billing_id', values[`${key}`])
                break;
            case "cost":
                // form['amount_of_damages'] = values[`${key}`]
                formData.append('amount_of_damages', values[`${key}`])
                break;
            case "typeOfDamage":
                // form['type_of_damage'] = values[`${key}`]
                formData.append('type_of_damage', values[`${key}`])
                break;
            case "city":
                // form.user['city'] = values[`${key}`]
                formData.append('user.city', values[`${key}`])
                break;
            case "fullName":
                // form.user['full_name'] = values[`${key}`]
                formData.append('user.full_name', values[`${key}`])
                break;
            case "address":
                // form.user['address'] = values[`${key}`]
                formData.append('user.address', values[`${key}`])
                break;
            case "nationalCode":
                // form.user['national_code'] = values[`${key}`]
                formData.append('user.national_code', values[`${key}`])
                break;
            case "phoneNumber":
                // form.user['phone_number'] = values[`${key}`]
                formData.append('user.phone_number', values[`${key}`])
                break;
            case "postalCode":
                // form.user['postal_code'] = values[`${key}`]
                formData.append('user.postal_code', values[`${key}`])
                break;
            case "state":
                // form.user['provice'] = values[`${key}`]
                formData.append('user.province', values[`${key}`])
                break;
            case "necessaryImg1":
                // form['last_bill_image'] = values[`${key}`]
                formData.append('last_bill_image', values[`${key}`])
                break;
            case "necessaryImg2":
                // form['national_card_image'] = values[`${key}`]
                formData.append('national_card_image', values[`${key}`])
                break;
            case "necessaryImg3":
                // form['ownership_doc_image'] = values[`${key}`]
                formData.append('ownership_doc_image', values[`${key}`])
                break;
            case "date":
                // form[key] = converToGe(`${values[key].year}-${values[key].month}-${values[key].day}`)
                formData.append('date', converToGe(`${values[key].year}-${values[key].month}-${values[key].day}`))
                break;
            default:
                form[key] = values[`${key}`]
                formData.append(key, values[`${key}`])
                break;
        }
    });
    return formData
}