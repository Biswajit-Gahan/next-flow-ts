import mongoose from "mongoose";

type ProductSchemaType = {
    productName: string,
    productDesc: string,
    productPrice: number,
    productImage: string,
}

const ProductSchema = new mongoose.Schema<ProductSchemaType>({
    productName: {
        type: String,
        required: true,
        minlength: 5,
    },
    productDesc: {
        type: String,
        required: true,
        minlength: 5,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default ProductSchema;