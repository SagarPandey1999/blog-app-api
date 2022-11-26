import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [2, "First Name can't be smaller the 2 characters"],
    maxlength: [20, "First Name can't be greater the 20 characters"],
    required:true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minlength: [2, "Last Name can't be smaller the 2 characters"],
    maxlength: [64, "Last Name can't be greater the 64 characters"],
    required:true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [2, "userName can't be smaller the 2 characters"],
    maxlength: [12, "userName can't be greater the 12 characters"],
    required:true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    maxlength: [128, "Email can't be greater than 128 characters"],
    required:true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    required:true,
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
    required:true,
  },
  status: {
    type: String,
    enum: ["inactive", "active", "suspended"],
    default: "active",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  profile: {
    type: String,
  },
  settings: {
    type: Object,
  },
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  last_login: {
    type: Date,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
