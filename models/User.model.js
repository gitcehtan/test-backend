const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: {
        type: String
    },
    age: {
        type: Number
    }

},{
    timestamps:true
});


module.exports = mongoose.model("user",UserSchema);