import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
    },
    colors: {
        type: Array,
    },
    sizes: {
        type: Array,
    },
    tags: {
        type: Array,
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    number_of_reviews: {
        type: Number,
    },
    sellerId: {
        type: String,
        required: true
    },
    reviews: {
        type: [ReviewSchema],
        default: []
    }
},
    {
        timestamps: true
    }
)

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product