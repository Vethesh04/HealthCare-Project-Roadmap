const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const appointmentRoutes =
    require("./routes/appointmentRoutes");

const contactRoutes =
    require("./routes/contactRoutes");


const app = express();
// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());


// ===============================
// MONGODB CONNECTION
// ===============================

mongoose
    .connect("mongodb://127.0.0.1:27017/healthcare")
    .then(() => {

        console.log(
            "MongoDB Connected Successfully"
        );

    })
    .catch((error) => {

        console.log(
            "MongoDB Connection Error:",
            error
        );

    });


// ===============================
// TEST ROUTE
// ===============================

app.get("/", (req, res) => {

    res.send(
        "Healthcare Backend is Running"
    );

});


// ===============================
// APPOINTMENT ROUTE
// ===============================

app.use(
    "/api/appointments",
    appointmentRoutes
);


// ===============================
// CONTACT ROUTE
// ===============================

app.use(
    "/api/contact",
    contactRoutes
);


// ===============================
// SERVER
// ===============================

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

    
});
