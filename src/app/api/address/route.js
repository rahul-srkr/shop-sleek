import { authOptions } from "@/lib/auth";
import connect from "@/lib/dbConn";
import User from "@/model/User";
import mongoose from "mongoose";
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

        const newAddress = await User.findOneAndUpdate({ email: session.user.email }, {
            $push: {
                addresses: body
            }
        })

        return NextResponse.json(newAddress);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function PUT(req) {
    try {

        await connect()

        const body = await req.json();

        const id = new mongoose.Types.ObjectId(body.id)

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const updateAddress = await User.findOneAndUpdate({ "addresses._id": id }, {
            $set: {
                "addresses.$.name": body.name,
                "addresses.$.mobile": body.mobile,
                "addresses.$.state": body.state,
                "addresses.$.pincode": body.pincode,
                "addresses.$.locality": body.locality,
                "addresses.$.district": body.district,
            }
        }, {
            new: true
        })
        return NextResponse.json(updateAddress);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
