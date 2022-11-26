import mongoose from "mongoose";
const rolePermssions = mongoose.Schema({
    role_id: {
        type:mongoose.Types.ObjectId,
        ref:"roles",
        required:true,
      },
      permission_id: {
        type:mongoose.Types.ObjectId,
        ref:"permissions",
        required:true,
      },
});

const RolePermissions = mongoose.model("rolePermissions", rolePermssions);

module.exports = RolePermissions;
