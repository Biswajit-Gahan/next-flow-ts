import mongoose from "mongoose";
import UserSchema from "@/utils/helpers/database/schema/user-schema";
import UserAuthSchema from "@/utils/helpers/database/schema/user-auth-schema";
import ProductSchema from "@/utils/helpers/database/schema/product-schema";

export const UserModel = mongoose.models?.User || mongoose.model("User", UserSchema);

export const UserAuthModel = mongoose.models?.UserAuth || mongoose.model("UserAuth", UserAuthSchema);

export const ProductModel = mongoose.models?.Product || mongoose.model("Product", ProductSchema);