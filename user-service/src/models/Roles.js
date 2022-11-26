import mongoose from "mongoose";
const roleSchema = mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
});

const Roles = mongoose.model("roles", roleSchema);

module.exports = Roles;
