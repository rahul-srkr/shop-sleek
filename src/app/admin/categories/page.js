"use client"
import axios from "axios";
import { useState } from "react";
import slugify from "slugify";
import {
    FaChevronRight
} from "react-icons/fa"

const Page = () => {
    const [newCategory, setNewCategory] = useState({
        name: "",
        parentId: null
    });

    const [allCategories, setAllCategories] = useState(null);

    const updateCategory = (categories, newCategory) => {
        if (!newCategory.parentId) {
            return [...categories, { ...newCategory, children: [] }];
        }

        const allCategories = []
        for (let category of categories) {
            if (category._id == newCategory.parentId) {
                category.children.push({
                    ...newCategory,
                    children: []
                })
            }

            if (category.children.length > 0) updateCategory(category.children, newCategory)
            allCategories.push(category)
        }

        return allCategories
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/category', newCategory)
            const addNewCategory = updateCategory(allCategories, res.data)
            setAllCategories(addNewCategory)
        } catch (err) {
            console.log(err);
        }
    }

    const renderCategories = (categories) => {
        const allCategories = []
        for (let category of categories) {
            allCategories.push(
                <li key={category._id}>
                    {category.name}
                    {category.children.length > 0 ? (<ul className="pl-10">
                        {renderCategories(category.children)}
                    </ul>) : null}
                </li>
            )
        }
        return allCategories
    }


    const getCategories = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get('/api/category')
            setAllCategories(res.data)
        } catch (err) {
            console.log(err);
        }
    }





    return (
        <div className="mt-40">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" value={newCategory.name} placeholder="Name" onChange={(e) => setNewCategory(prev => ({ ...prev, name: e.target.value }))} />
                <input type="text" name="" id="" onChange={(e) => setNewCategory(prev => ({ ...prev, parentId: e.target.value }))} placeholder="Parent" />
                <button type="submit">Add</button>
            </form>
            <button onClick={getCategories}>Get</button>
            <div className="w-[12rem]">
                {
                    allCategories !== null &&
                    <>
                        <ul className="flex flex-col space-y-3 px-2 mt-3">
                            {renderCategories(allCategories)}
                        </ul>

                    </>
                }
            </div>
            <button onClick={() => updateCategory(allCategories)}>update</button>
        </div>
    )
}
export default Page