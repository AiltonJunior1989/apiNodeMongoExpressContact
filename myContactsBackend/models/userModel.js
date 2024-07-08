import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add the user name']
  },
  email: {
    type: String,
    required: [true, 'Please add the user email adress'],
    unique: [true, 'Email adress already taken']
  },
  password: {
    type: String,
    required: [true, 'Please add the user password']
  }
},
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);