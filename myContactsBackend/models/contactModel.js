import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  name: {
    type: String,
    required: [true, "Please add the contact name"]
  },
  email: {
    type: String,
    required: [true, "Please add the contact email address"]
  },
  phone: {
    type: String,
    required: [true, "Please add the contact phone number"]
  }
},
  {
    timestamps: true
  });


export default mongoose.model("Contact", contactSchema);
