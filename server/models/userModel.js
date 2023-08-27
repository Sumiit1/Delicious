const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      id:{
        type:String,
        required:true,
        unique:true
      },
      admin:{
        type:Boolean,
        required:true
      }
    },
    {
      timestamps: true,
    }
  );


module.exports = mongoose.model("User", userSchema);