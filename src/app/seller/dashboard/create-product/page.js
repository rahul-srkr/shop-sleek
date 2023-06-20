"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState, useCallback } from 'react';
import { MdClose } from 'react-icons/md'
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { categories } from '@/redux/feature/categories/categoriesSlice';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone'
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from 'react-icons/ai';
import { createProductValidation } from '@/lib/validation/createProductValidation';
import { getSignature, saveToDatabase } from '@/app/_action';
import axios from 'axios';
import { useSession } from 'next-auth/react'
import Badge from '@/components/Badge';

const AddColor = ({ pickColor, colors, setPickColor, setColors }) => {
    const handleColor = (e) => {
        if (e.target.name === "color-name") setPickColor(prev => ({ ...prev, name: e.target.value }))
        if (e.target.name === "color") setPickColor(prev => ({ ...prev, color: e.target.value }))
    }

    const submitColor = (e) => {
        e.preventDefault()
        if (pickColor.name !== "" && pickColor.color !== "") {
            const isColorAlreadyExists = colors.find(col => col.color === pickColor.color || col.name === pickColor.name)
            if (!isColorAlreadyExists) {
                setColors(prev => [...prev, { name: pickColor.name, color: pickColor.color }])
            }
            setPickColor({ name: "", color: "" })
        }
    }

    const removeColor = (name) => {
        const newColors = colorsName.filter(col => col.name !== name)
        setColors(newColors)
    }
    return (
        <div className='flex flex-col gap-4 flex-grow'>
            <label className='txt-primary'>Add Color</label>
            <div className='w-full flex gap-5'>
                <TextField
                    type="color"
                    variant="outlined"
                    label="Pick Color"
                    value={pickColor.color}
                    name='color'
                    onChange={handleColor}
                    className='w-[20%]'
                    size='small'
                />
                <TextField
                    type="text"
                    variant="outlined"
                    label="Color Name"
                    value={pickColor.name}
                    name='color-name'
                    onChange={handleColor}
                    size='small'
                    className='w-[60%]'
                />
                <button onClick={submitColor} className='btn-initial px-2 py-1 w-[20%] text-sm rounded-md font-semibold'>Add</button>
            </div>
            <ul className='flex gap-2 flex-wrap'>
                {
                    colors.map(col => <li key={col.color} style={{ backgroundColor: col.color }} className='p-1 rounded-sm flex items-center gap-1'>
                        <span className='text-xs font-medium text-white'>{col.name}</span>
                        <MdClose className='cursor-pointer text-white' onClick={() => removeColor(col.name)} />
                    </li>)
                }
            </ul>
        </div>
    )
}

const AddCategory = ({ allCategories, getCategories, setAllCategories, control, errors }) => {
    const modifyCategories = (categories, option = []) => {
        for (const cate of categories) {
            option.push({
                value: cate._id,
                label: cate.name
            })
            cate.children.length > 0 && modifyCategories(cate.children, option)
        }
        return option
    }

    useEffect(() => {
        getCategories.length > 0 && setAllCategories(modifyCategories(getCategories))
    }, [getCategories]);
    return (
        <div className='flex flex-col gap-4 w-[40%]'>
            <label className={`${errors.category && "text-[#d32f2f]"} font-medium`}>Select Category</label>
            <div>
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => <Select
                        {...field}
                        options={allCategories}
                        className={`${errors.category && 'border-[#d32f2f] border rounded-md'}`}
                    />}
                />
                {errors.category && <p className='text-xs text-[#d32f2f] font-medium py-1'>category is a required field</p>}
            </div>
        </div>
    )
}

const AddImages = ({ files, setFiles, rejected, setRejected, filesIsEmpty, setFilesIsEmpty }) => {
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (acceptedFiles?.length) {
            setFiles(prev => [
                ...prev,
                ...acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            ])
            setFilesIsEmpty(false)
        }
        if (rejectedFiles?.length) {
            setRejected(prev => [
                ...prev,
                ...rejectedFiles
            ])
        }
    }, [])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept: {
            "image/*": []
        },
        maxSize: 1024 * 1000,
        maxFiles: 4
    })

    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    const removeRejected = (name) => {
        setRejected(files => files.filter(({ file }) => file.name !== name))
    }
    return (
        <div className='flex flex-col gap-4'>
            <label className={`${filesIsEmpty && "text-[#d32f2f]"} bgc-primary`}>Product Image</label>
            <div {...getRootProps()} className={`w-full h-32 flex items-center justify-center bgc-initial ${filesIsEmpty && "border border-[#d32f2f]"}`}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <div>
                            <AiOutlineCloudUpload className='w-6 h-6 mx-auto' />
                            <p className='text-center text-sm'>Drag and drop some files here, or click to select files</p>
                        </div>

                }
            </div>
            {
                filesIsEmpty && <p className='text-xs font-medium text-[#d32f2f]'>upload atleast one product photo</p>
            }
            {/* preview */}
            {
                files.length > 0 && <div>
                    <p className='text-lg font-semibold my-2'>Accepted</p>
                    <ul className='flex gap-4 flex-wrap'>
                        {
                            files.map(file => <li key={file.name} className='relative'>
                                <Image src={file.preview} width={150} height={200} alt={file.name} onLoad={() => URL.revokeObjectURL(file.preview)} />
                                <AiOutlineCloseCircle onClick={() => removeFile(file.name)} className='absolute top-0 right-0 w-6 h-6 rounded-full bg-white hover:bg-red-500 hover:text-white' />
                            </li>)
                        }
                    </ul>
                </div>
            }
            {
                rejected.length > 0 && <div>
                    <p className='text-lg font-semibold my-2'>Rejected</p>
                    <ul className='flex gap-4 flex-wrap'>
                        {
                            rejected.map(({ file, errors }) => <li key={file.name} className='flex justify-between w-full'>
                                <div>
                                    <p>{file.name}</p>
                                    <ul>
                                        {
                                            errors.map(error => <li key={error.code} className='text-sm font-medium text-red-500 pl-3'>{error.message}</li>)
                                        }
                                    </ul>
                                </div>
                                <button onClick={() => removeRejected(file.name)} className='bg-red-500 p-2 self-start text-sm font-semibold rounded-md text-white'>Delete</button>
                            </li>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}


const Page = () => {
    const { status, data: session, update } = useSession()
    const getCategories = useSelector(categories)
    const [allCategories, setAllCategories] = useState([]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [colors, setColors] = useState([]);
    const [pickColor, setPickColor] = useState({
        name: "",
        color: ""
    });
    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState("")
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const [files, setFiles] = useState([]);
    const [rejected, setRejected] = useState([]);
    const [filesIsEmpty, setFilesIsEmpty] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(createProductValidation),
    });

    if (status === "loading") {
        return (
            <p>Loading.....</p>
        )
    }

    const onEditorStateChange = (e) => {
        setEditorState(e)
    }

    const createProduct = (data) => {
        const product = {
            ...data,
            images: [],
            description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
            tags,
            colors,
            sizes,
            category: data.category.label,
            sellerId: session.user.seller._id
        }
        const uploaders = files.map(async (file) => {
            const { timestamp, signature } = await getSignature()

            const formData = new FormData()

            formData.append('file', file)
            formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
            formData.append("signature", signature)
            formData.append("timestamp", timestamp)
            formData.append("folder", "product")

            const endPoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
            return axios.post(endPoint, formData).then((res) => {
                const data = res.data
                const imageUrl = data.secure_url
                product.images.push(imageUrl)
            })
        })
        axios.all(uploaders).then(async () => {
            try {
                const res = await axios.post("http://localhost:3000/api/product", product)
                console.log(res.data);
                reset()
                setFiles([])
                setColors([])
                setTags([])
                setSizes([])
                setEditorState(EditorState.createEmpty())
            } catch (err) {
                console.log(err);
            }
        }).catch(err => console.log(err))
    }

    const onSubmit = data => {
        if (files.length === 0) {
            setFilesIsEmpty(true)
            return
        }
        createProduct(data)
    }

    return (
        <div className='w-full bgc-primary'>
            <h1 className='text-2xl font-bold py-5 w-[70%] mx-auto'>Add New Product</h1>
            <form action="" className='flex flex-col gap-12 w-[70%] border mx-auto p-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-10'>
                    <TextField
                        error={errors.title && true}
                        helperText={errors?.title?.message}
                        type="text"
                        variant="standard"
                        label="Title"
                        {...register("title")}
                        className='flex-grow'
                        size='small'
                    />

                    <TextField
                        error={errors.brand && true}
                        helperText={errors?.brand?.message}
                        type="text"
                        variant="standard"
                        label="Brand Name"
                        {...register("brand")}
                        className='flex-grow'
                        size='small'
                    />
                </div>

                <div className='flex flex-col gap-4 h-[25rem]'>
                    <label className='txt-primary'>Description</label>
                    <div className='border h-full'>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
                </div>

                <div className='flex gap-6'>
                    <AddCategory
                        allCategories={allCategories}
                        getCategories={getCategories}
                        setAllCategories={setAllCategories}
                        control={control}
                        errors={errors}
                    />

                    <Badge
                        badge={tag}
                        setBadge={setTag}
                        setBadges={setTags}
                        badges={tags}
                        title={"Add Tag"}
                        label={"Tag"}
                    />
                </div>

                <div className='flex gap-10'>
                    <TextField
                        error={errors.price && true}
                        helperText={errors?.price?.message}
                        type="number"
                        variant="standard"
                        label="Price"
                        {...register("price")}
                        className='flex-grow'
                        size="small"
                    />

                    <TextField
                        error={errors.discount && true}
                        helperText={errors?.discount?.message}
                        type="number"
                        variant="standard"
                        label="Discount Price"
                        {...register("discount")}
                        className='flex-grow'
                        size='small'
                    />

                    <TextField
                        error={errors.stock && true}
                        helperText={errors?.stock?.message}
                        type="number"
                        variant="standard"
                        label="Product Stock"
                        {...register("stock")}
                        className="flex-grow"
                        size="small"
                    />
                </div>

                <div className='flex gap-10'>
                    <AddColor
                        pickColor={pickColor}
                        colors={colors}
                        setPickColor={setPickColor}
                        setColors={setColors}
                    />

                    <Badge
                        badge={size}
                        setBadge={setSize}
                        setBadges={setSizes}
                        badges={sizes}
                        title={"Add Size"}
                        label={"Size"}
                    />
                </div>


                <AddImages
                    setFiles={setFiles}
                    files={files}
                    rejected={rejected}
                    setRejected={setRejected}
                    filesIsEmpty={filesIsEmpty}
                    setFilesIsEmpty={setFilesIsEmpty}
                />
                <button type='submit' className='btn-tertiary w-full p-2 text-sm font-semibold my-3'>Create</button>
            </form>
        </div>
    )
}

export default Page