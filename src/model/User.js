import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
const SellerSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    mobile: {
        type: String,
    },
    location: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    dob: {
        type: Date
    },
    gender: {
        type: String,
    },
    addresses: {
        type: [AddressSchema],
        default: []
    },
    seller: {
        type: SellerSchema
    }
},
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User