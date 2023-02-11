import { Schema , model } from "mongoose";

const DB  = new Schema({
    username: { type: String ,  unique: true, required: true},
    email: { type: String , required: true, unique:true},
    password: { type: String , required: true}
}, {timestamps: true})

const User = model('User', DB)
export default User 