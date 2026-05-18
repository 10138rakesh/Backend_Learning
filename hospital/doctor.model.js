const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    experience: {
        type: Number
    },

    phone: {
        type: String
    },

    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },

    fees: {
        type: Number
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Doctor", doctorSchema);