import mongoose from "mongoose";

type UserSchemaType = {
    userName: string,
    userId: number,
    password: string,
}

const UserSchema = new mongoose.Schema<UserSchemaType>({
    userName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25,
        lowercase: true,
    },
    userId: {
        type: Number,
        required: true,
        maxlength: 5,
        minlength: 5,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default UserSchema;