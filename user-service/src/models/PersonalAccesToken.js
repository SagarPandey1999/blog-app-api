import mongoose from "mongoose";
const personalAccessTokenSchema=mongoose.Schema({
    user_id: {
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true,
      },
      name: {
        type:String,
      },
      token: {
        type:String,
        required:true,
      },
      last_used_at: {
        type:Date,
      },
      last_ip_address: String,
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
})

const PersonalAccessToken = mongoose.model("personalAccessTokens", personalAccessTokenSchema);

module.exports = PersonalAccessToken;