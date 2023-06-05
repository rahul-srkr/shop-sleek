import * as yup from "yup";

export const userValidation = yup.object({
    name: yup.string().required(),
    mobile: yup.number().required(),
    email: yup.string().email().required(),
    location: yup.string(),
    gender: yup.string(),
}).required();