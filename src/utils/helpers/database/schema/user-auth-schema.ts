import mongoose from "mongoose";

type UserAuthSchemaType = {
    userId: string,
    token: string,
}

const UserAuthSchema = new mongoose.Schema<UserAuthSchemaType>({
    userId: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
    },

    token: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default UserAuthSchema;