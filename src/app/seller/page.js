"use client"
import { useSession } from 'next-auth/react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Loader2 } from "lucide-react";
import { sellerValidation } from '@/lib/validation/sellerValidation';

const Page = () => {
    const { status, data: session, update } = useSession()
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(sellerValidation)
    });

    const sellerRegister = async (data) => {
        try {
            setLoading(true)
            const res = await axios.put("/api/seller", data);
            update({
                role: res.data.role,
                seller: res.data.seller
            })
            setLoading(false)
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }

    const onSubmit = data => {
        sellerRegister(data)
    }
    return (
        <div>
            <h1 className='txt-initial font-bold text-2xl text-center'>Register as a Seller</h1>
            <form action="" className="flex flex-col gap-4 w-[30rem] mx-auto bgc-primary p-3" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    error={errors.shopName}
                    helperText={errors?.shopName?.message}
                    type="text"
                    variant="standard"
                    label="Shop Name"
                    {...register("shopName")}
                />

                <TextField
                    error={errors.mobile}
                    helperText={errors?.mobile?.message}
                    type="text"
                    variant="standard"
                    label="Mobile"
                    {...register("mobile")}
                />

                <TextField
                    error={errors.email}
                    helperText={errors?.email?.message}
                    type="email"
                    variant="standard"
                    label="Email"
                    {...register("email")}
                />

                <TextField
                    error={errors.pincode}
                    helperText={errors?.pincode?.message}
                    type="text"
                    variant="standard"
                    label="Pincode"
                    {...register("pincode")}
                />

                <TextField
                    error={errors.address}
                    helperText={errors?.address?.message}
                    type="text"
                    variant="standard"
                    label="Address"
                    {...register("address")}
                />

                <button disabled={loading} type="submit" className="btn-tertiary px-3 py-2 text-sm font-semibold">
                    {
                        loading ?
                            <Loader2 className="h-5 w-5 animate-spin mx-auto" /> :
                            "Register"
                    }
                </button>
            </form>
        </div>
    )
}
export default Page