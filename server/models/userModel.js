import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    creditBalance: { type: Number, default: 5 }
}, {timestamps: true});

const userModel = mongoose.models.user || mongoose.model("user", userShema);

export default userModel;