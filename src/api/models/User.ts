import mongoose, { Document, Schema } from "mongoose";

interface UserDoc extends Document {
    name?: string;
    email: string;
    password: string;   
    //TODO: create a schema for pastPulls Then add it here
    // pastPulls: [PullSchema];
}

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const UserModel = mongoose.model<UserDoc>('User', UserSchema);

export { UserModel, UserDoc };

// export const getUserBySessionToken = (sessionToken: string) =>
//   UserModel.findOne({
//     "authentication.sessionToken": sessionToken,
//   });