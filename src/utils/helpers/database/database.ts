import mongoose from "mongoose";
import {ProductModel, UserAuthModel, UserModel} from "@/utils/helpers/database/models";

type ConnectDbReturnType = {
    connectionState: number | null,
    message: string,
}

let mongooseConnection: { connectionState: number | null } = {
    connectionState: null
};

const DATABASE = {
    METHODS: {
        async connectDb(): Promise<ConnectDbReturnType> {
            try {
                if(mongooseConnection.connectionState) return {
                    connectionState: mongooseConnection.connectionState,
                    message: "DB Already Connected."
                };

                const dbConnection = await mongoose.connect(process.env.MONGO_URL as string);
                mongooseConnection.connectionState = dbConnection.connections[0].readyState
                return {
                    connectionState: mongooseConnection.connectionState,
                    message: "DB Connected Successfully."
                };
            } catch(error) {
                const {message} = error as Error;
                return {
                    connectionState: mongooseConnection.connectionState,
                    message,
                }
            }
        },
    },

    DB_MODELS: {
        USER_MODEL: UserModel,
        USER_AUTH_MODEL: UserAuthModel,
        PRODUCT_MODEL: ProductModel,
    }
}

export default DATABASE;