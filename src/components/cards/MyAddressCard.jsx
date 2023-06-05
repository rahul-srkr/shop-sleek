import Modal from "../ui/Modal"
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressValidation } from "@/lib/validation/addressValidation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const MyAddressCard = ({ address, update }) => {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addressValidation),
        defaultValues: {
            id: address._id,
            name: address.name,
            mobile: address.mobile,
            state: address.state,
            locality: address.locality,
            address: address.address,
            pincode: address.pincode,
            district: address.district
        }
    });

    const addAddress = async (data) => {
        try {
            setLoading(true)
            const res = await axios.put("/api/address", data);
            update({ addresses: res.data.addresses })
            setLoading(false)
            setShowModal(false)
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }

    const deleteAddress = async (id) => {
        try {
            setLoading(true)
            const res = await axios.delete(`/api/address/${id}`)
            update({ addresses: res.data.addresses })
            setLoading(false)
            setShowConfirmModal(false)
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }

    }

    const onSubmit = data => {
        addAddress(data)
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
                                    "Update"
                            }
                        </button>
                    </form>
                </Modal>
            }
            {
                showConfirmModal && <Modal onClose={() => setShowConfirmModal(false)}>
                    <div className="space-y-6 relative">
                        <h2 className="text-xl font-semibold">Are You Sure?</h2>
                        <div className="flex justify-between">
                            <button disabled={loading} onClick={() => deleteAddress(address._id)} className="btn-tertiary px-3 py-1 font-semibold text-sm">Yes</button>
                            <button disabled={loading} onClick={() => setShowConfirmModal(false)} className="btn-initial px-3 py-1 font-semibold text-sm">No</button>
                        </div>
                        {
                            loading && <Loader2 className="h-10 w-10 animate-spin absolute mx-auto my-auto top-0 left-0" />
                        }

                    </div>
                </Modal>
            }

            <div className="border p-1">
                <div className="space-y-2">
                    <div>{address.name}</div>
                    <div>
                        <div>{address.address}</div>
                        <div>{address.locality}</div>
                        <div>{address.pincode}</div>
                        <div>{address.state}</div>
                    </div>
                    <div>Mobile: {address.mobile}</div>
                </div>
                <div className="w-full flex items-center">
                    <button className="p-2 btn-initial my-2 w-1/2 border-r" onClick={() => setShowModal(true)}>Edit</button>
                    <button className="p-2 btn-initial my-2 w-1/2 border-l" onClick={() => setShowConfirmModal(true)}>Remove</button>
                </div>
            </div>
        </>

    )
}
export default MyAddressCard