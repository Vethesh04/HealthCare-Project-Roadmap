const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


const Appointment = require("./models/Appointment");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());


// ================= MONGODB CONNECTION =================

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:");
        console.log(error.message);
    });


// ================= HOME ROUTE =================

app.get("/", (req, res) => {

    res.send("Healthcare Backend is Running");

});


// ================= CREATE APPOINTMENT =================

app.post("/api/appointments", async (req, res) => {

    try {

        console.log("Received Data:");
        console.log(req.body);


        const {
            name,
            email,
            phone,
            gender,
            age,
            department,
            doctor,
            date,
            time,
            problem
        } = req.body;


        // ================= VALIDATION =================

        if (
            !name ||
            !email ||
            !phone ||
            !gender ||
            !age ||
            !department ||
            !doctor ||
            !date ||
            !time ||
            !problem
        ) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }


        // ================= CREATE APPOINTMENT =================

        const appointment = new Appointment({

            name,
            email,
            phone,
            gender,
            age,
            department,
            doctor,
            date,
            time,
            problem

        });


        // ================= SAVE TO MONGODB =================

        const savedAppointment = await appointment.save();


        // ================= RESPONSE =================

        res.status(201).json({

            success: true,

            message: "Appointment booked successfully",

            appointment: savedAppointment

        });

    }

    catch (error) {

        console.log("Appointment Error:");
        console.log(error.message);


        res.status(500).json({

            success: false,

            message: "Failed to book appointment",

            error: error.message

        });

    }

});


// ================= GET ALL APPOINTMENTS =================

app.get("/api/appointments", async (req, res) => {

    try {

        const appointments = await Appointment.find()
            .sort({ createdAt: -1 });


        res.status(200).json({

            success: true,

            count: appointments.length,

            appointments

        });

    }

    catch (error) {

        console.log(error.message);


        res.status(500).json({

            success: false,

            message: "Failed to fetch appointments"

        });

    }

});


// ================= GET SINGLE APPOINTMENT =================

app.get("/api/appointments/:id", async (req, res) => {

    try {

        const appointment =
            await Appointment.findById(req.params.id);


        if (!appointment) {

            return res.status(404).json({

                success: false,

                message: "Appointment not found"

            });

        }


        res.status(200).json({

            success: true,

            appointment

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Invalid appointment ID"

        });

    }

});


// ================= DELETE APPOINTMENT =================

app.delete("/api/appointments/:id", async (req, res) => {

    try {

        const deletedAppointment =
            await Appointment.findByIdAndDelete(
                req.params.id
            );


        if (!deletedAppointment) {

            return res.status(404).json({

                success: false,

                message: "Appointment not found"

            });

        }


        res.status(200).json({

            success: true,

            message: "Appointment deleted successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Failed to delete appointment"

        });

    }

});


// ================= START SERVER =================

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});