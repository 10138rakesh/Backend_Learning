const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        type: String
    },

    bloodGroup: {
        type: String
    },

    disease: {
        type: String
    },

    admitted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Patient", patientSchema);