import { authOptions } from "@/lib/auth";
import connect from "@/lib/dbConn";
import Category from "@/model/Categories";
import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req, res) {
    try {
        await connect()

        const body = await req.json();

        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const categoryObj = {
            name: body.name,
            slug: slugify(body.name)
        }

        if (body.parentId) {
            categoryObj.parentId = body.parentId
        }

        const addCategory = await new Category(categoryObj)

        const category = await addCategory.save()

        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

function createCategory(categories, parentId = null) {
    const categoryList = []
    let category
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }

    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: createCategory(categories, cate._id)
        })
    }

    return categoryList
}

export async function GET(req) {
    try {
        await connect()

        const categories = await Category.find()
        const categoryList = createCategory(categories)

        return NextResponse.json(categoryList);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}