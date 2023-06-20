import mongoose, { Document, Schema } from "mongoose";

interface UserDoc extends Document {
  username?: string;
  email: string;
  //   password: string;
  authentication: Record<string, any>;
  //TODO: create a schema for pastPulls Then add it here
  // pastPulls: [PullSchema];
}

const UserSchema = new Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  //   password: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, required: true, select: false },
    sessionToken: { type: String, select: false },
  },
});

const UserModel = mongoose.model<UserDoc>("User", UserSchema);

export { UserModel, UserDoc };

// methods of the UserModel
//^ Create/Sustain/Destroy methods
export const createUser = (values: Record<string, any>) =>
  // console.log("Values:", values); // Log the values object
  new UserModel(values).save().then((user) => user.toObject());

//     console.log("User before save:", user); // Log the user object before save

//     return user.save().then((user) => {
//         console.log("User after save:", user); // Log the user object after save
//         return user.toObject();
//       }).catch((error) => {
//         console.error("Error during save:", error); // Log any errors that occur during save
//         throw error; // Re-throw the error so it can be handled elsewhere

//       });

//   };

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
