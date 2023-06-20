import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            required: true
        },
        parentId: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema)

export default Category