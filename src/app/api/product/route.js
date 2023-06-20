import { authOptions } from "@/lib/auth";
import connect from "@/lib/dbConn";
import Product from "@/model/Product";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connect()

        const body = await req.json();

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const newProduct = await new Product(body)

        const product = await newProduct.save()

        return NextResponse.json(product);

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}