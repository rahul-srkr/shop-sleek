import { authOptions } from "@/lib/auth";
import connect from "@/lib/dbConn";
import User from "@/model/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {

        await connect()

        const { id } = params

        const deleteAddress = new mongoose.Types.ObjectId(id)

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const findAddress = await User.findOneAndUpdate({ email: session.user.email }, {
            $pull: {
                addresses: { _id: deleteAddress }
            }
        })
        return NextResponse.json(findAddress);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

