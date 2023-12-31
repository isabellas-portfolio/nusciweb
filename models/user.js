import mongoose from 'mongoose';

const Scema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, required: true}, 
    bio: {type: String, required: false}
}, { 
    collection: 'users'
});

const db = mongoose.connection.useDb("users");
const User = db.model("User", UserSchema);

export default User;