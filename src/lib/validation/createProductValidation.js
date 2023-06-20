import * as yup from "yup";

export const createProductValidation = yup.object({
    title: yup.string().required(),
    brand: yup.string().required(),
    stock: yup.number().required().min(0),
    category: yup.object({
        label: yup.string().required(),
        value: yup.string().required()
    }).required(),
    price: yup.number().required().min(0),
    discount: yup.number().min(0),
}).required();