import mongoose, { Document, Schema } from "mongoose";

interface UserDoc extends Document {
  username?: string;
  email: string;
  password: string;
  //TODO: create a schema for pastPulls Then add it here
  // pastPulls: [PullSchema];
}

const UserSchema = new Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<UserDoc>("User", UserSchema);

export { UserModel, UserDoc };

// methods of the UserModel 
//^ Create/Sustain/Destroy methods
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
export const deleteUserById = (id: string) =>
  UserModel.findByIdAndDelete({ _id: id });

//^ Search/Find methods
export const getUserById = (id: string) => UserModel.findById(id);
export const getUsers = async () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
