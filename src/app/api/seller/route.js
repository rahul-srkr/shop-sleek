import { authOptions } from "@/lib/auth";
import connect from "@/lib/dbConn";
import User from "@/model/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        await connect()

        const body = await req.json();

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const updateUser = await User.findOneAndUpdate({ email: session.user.email }, {
            role: "seller",
            seller: {
                shopName: body.name,
                email: body.email,
                mobile: body.mobile,
                address: body.address,
                pincode: body.pincode
            }
        }, {
            new: true
        })

        return NextResponse.json(updateUser);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}