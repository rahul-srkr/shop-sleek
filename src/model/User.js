import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
    },
    phoneNumber: {
        type: Number,
    },
    addresses: [
        {
            country: {
                type: String,
            },
            city: {
                type: String,
            },
            address1: {
                type: String,
            },
            address2: {
                type: String,
            },
            zipCode: {
                type: Number,
            },
            addressType: {
                type: String,
            },
        }
    ],
    role: {
        type: String,
        default: "user",
    },
    avatar: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;