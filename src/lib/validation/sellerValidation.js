import * as yup from "yup";

export const sellerValidation = yup.object({
    shopName: yup.string().required(),
    mobile: yup.number().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    pincode: yup.number().required(),
}).required();