"use client"
import { useSession } from 'next-auth/react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { userValidation } from '@/lib/validation/userValidation';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from '@/components/ui/Modal';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import FormControl from '@mui/material/FormControl';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Loader2 } from "lucide-react";

const UserForm = ({ session, setShowModal, update }) => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userValidation),
        defaultValues: {
            name: session.user.name || "",
            email: session.user.email || "",
            mobile: session.user.mobile || "",
            location: session.user.location || ""
        }
    });

    const updateUser = async (data) => {
        try {
            setLoading(true)
            const res = await axios.put("/api/user", data);
            update({
                name: res.data.name,
                mobile: res.data.mobile,
                email: res.data.email,
                location: res.data.location,
                gender: res.data.gender
            })
            setLoading(false)
            setShowModal(false)
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }

    const onSubmit = data => {
        updateUser(data)
    }
    return (
        <>
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
                    error={errors.email}
                    helperText={errors?.email?.message}
                    type="email"
                    variant="standard"
                    label="Email"
                    {...register("email")}
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
                    error={errors.location}
                    helperText={errors?.location?.message}
                    type="text"
                    variant="standard"
                    label="Location"
                    {...register("location")}
                />

                <FormControl variant="standard">
                    <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        defaultValue={session.user.gender || ""}
                        {...register("gender")}
                        label="Gender"
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>
                <button disabled={loading} type="submit" className="btn-tertiary px-3 py-2 text-sm font-semibold">
                    {
                        loading ?
                            <Loader2 className="h-5 w-5 animate-spin mx-auto" /> :
                            "Update"
                    }
                </button>
            </form>
        </>
    )
}

const Page = () => {
    const { status, data: session, update } = useSession()
    const [showModal, setShowModal] = useState(false);


    if (status === "loading") {
        return (
            <p>Loading.....</p>
        )
    }

    return (
        <>
            {
                showModal && <Modal onClose={() => setShowModal(false)}>
                    <UserForm session={session} setShowModal={setShowModal} update={update} />
                </Modal>
            }
            <div className="max-w-[30rem] mx-auto">
                <h2 className="text-xl font-semibold">Profile Details</h2>
                <hr className="w-full bg-gray-400 my-3" />
                <div className="flex items-center justify-between">
                    <div className="space-y-2 w-1/2">
                        <div>Name</div>
                        <div>Mobile Number</div>
                        <div>Email Id</div>
                        <div>Gender</div>
                        <div>Location</div>
                    </div>
                    <div className="space-y-2 w-1/2">
                        <div>{session?.user?.name}</div>
                        <div>{session?.user?.mobile || "--"}</div>
                        <div>{session?.user?.email}</div>
                        <div>{session?.user?.gender || "--"}</div>
                        <div className='line-clamp-1'>{session?.user?.location || "--"}</div>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="w-full p-2 btn-initial my-2">Edit</button>
            </div>
        </>

    )


}
export default Page