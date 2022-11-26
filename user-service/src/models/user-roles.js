import mongoose from "mongoose";
const userRoles = mongoose.Schema({
    user_id: {
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true,
      },
    role_id: {
        type:mongoose.Types.ObjectId,
        ref:"roles",
        required:true,
      }
});

const UserRoles = mongoose.model("userRoles", userRoles);

module.exports = UserRoles;
