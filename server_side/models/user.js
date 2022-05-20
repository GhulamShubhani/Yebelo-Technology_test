const mongoose=require("mongoose");

const UserSchema= mongoose.Schema({
    e_id:{
        type:String,
        required:true,
        min:3,
        max:10
    },
    e_name:{
        type:String,
        required:true,
        min:3,
        max:25
    },
    e_address:{
        type:String,
        required:true,
        min:5,
        max:50
    },
    e_designation:{
        type:String,
        required:true,
        min:8,
        max:25
    },
    e_doj:{
        type:Date,
        required:true,
    },
    e_dor:{
        type:Date,

    }

})
//module.exports = mongoose.model("user",UserSchema);
const User=new mongoose.model("User",UserSchema);
module.exports = User;
