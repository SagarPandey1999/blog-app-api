import mongoose from "mongoose";
const permissionSchema = mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
});

const Permissions = mongoose.model("permissions", permissionSchema);

module.exports = Permissions;
