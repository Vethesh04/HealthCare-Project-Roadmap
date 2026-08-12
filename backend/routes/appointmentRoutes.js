const express = require("express");

const Appointment =
    require("../models/Appointment");

const router = express.Router();


// ===============================
// CREATE APPOINTMENT
// ===============================

router.post("/", async (req, res) => {

    try {

        const appointment =
            new Appointment(req.body);

        const savedAppointment =
            await appointment.save();

        res.status(201).json({
            message: "Appointment booked successfully",
            appointment: savedAppointment
        });

    } catch (error) {

        console.log(
            "Appointment Error:",
            error
        );

        res.status(500).json({
            message: "Failed to book appointment",
            error: error.message
        });
    }
});


module.exports = router;