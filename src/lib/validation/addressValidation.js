import * as yup from "yup";

export const addressValidation = yup.object({
    name: yup.string().required(),
    mobile: yup.number().required(),
    state: yup.string().required(),
    pincode: yup.number().required(),
    address: yup.string().required(),
    locality: yup.string().required(),
    district: yup.string().required(),
}).required();

