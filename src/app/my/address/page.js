"use client"
import Modal from "@/components/ui/Modal"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { addressValidation } from "@/lib/validation/addressValidation";
import { useSession } from 'next-auth/react'
import MyAddressCard from "@/components/cards/MyAddressCard";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const Page = () => {
    const { status, data: session, update } = useSession()
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addressValidation),
    });

    const addAddress = async (data) => {
        try {
            setLoading(true)
            const res = await axios.post("/api/address", data);
            update({ addresses: res.data.addresses })
            setLoading(false)
            setShowModal(false)
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }

    const onSubmit = data => {
        addAddress(data)
    }

    if (status === "loading") {
        return (
            <p>Loading.....</p>
        )
    }
    return (
        <>
            {
                showModal && <Modal onClose={() => setShowModal(false)}>
                    <form action="" className="flex flex-col gap-4 w-[25rem]" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            error={errors.name}
                            helperText={errors?.name?.message}
                            type="text"
                            variant="standard"
                            label="Name"
                            {...register("name")}
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
                            error={errors.state}
                            helperText={errors?.state?.message}
                            type="text"
                            variant="standard"
                            label="State"
                            {...register("state")}
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

                        <TextField
                            error={errors.locality}
                            helperText={errors?.locality?.message}
                            type="text"
                            variant="standard"
                            label="Locality"
                            {...register("locality")}
                        />

                        <TextField
                            error={errors.district}
                            helperText={errors?.district?.message}
                            type="text"
                            variant="standard"
                            label="District"
                            {...register("district")}
                        />
                        <button disabled={loading} type="submit" className="btn-tertiary px-3 py-2 text-sm font-semibold">
                            {
                                loading ?
                                    <Loader2 className="h-5 w-5 animate-spin mx-auto" /> :
                                    "Add"
                            }
                        </button>
                    </form>
                </Modal>
            }

            <div className="mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Saved Address</h2>
                    <button className="py-2 px-3 border" onClick={() => setShowModal(true)}>+ Add New</button>
                </div>

                <hr className="w-full bg-gray-400 my-3" />
                <div className="font-semibold text-sm mb-1">Default Address</div>
                {
                    session.user?.addresses?.map(address => <MyAddressCard key={address._id} address={address} update={update} />)
                }

            </div>

        </>

    )
}
export default Page