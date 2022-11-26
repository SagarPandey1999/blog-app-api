import mongoose from "mongoose";
const userPermissions = mongoose.Schema({
    user_id: {
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true,
      },
    permission_id: {
        type:mongoose.Types.ObjectId,
        ref:"permissions",
        required:true,
      }
});

const UserPermissions = mongoose.model("userPermissions", userPermissions);

module.exports = UserPermissions;
