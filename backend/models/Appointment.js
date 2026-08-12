const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: Number,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: true,
            min: 1,
            max: 120
        },

        department: {
            type: String,
            required: true
        },

        doctor: {
            type: String,
            required: true
        },

        date: {
            type: String,
            required: true
        },

        time: {
            type: String,
            required: true
        },

        problem: {
            type: String,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const Appointment = mongoose.model(
    "Appointment",
    appointmentSchema
);

module.exports = Appointment;