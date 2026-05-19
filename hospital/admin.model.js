const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
{
    name: String,

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String
    },

    role: {
        type: String,
        default: "Admin"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Admin", adminSchema);