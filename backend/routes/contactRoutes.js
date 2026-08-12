const express = require("express");

const Contact =
    require("../models/Contact");

const router = express.Router();


// ===============================
// CREATE CONTACT MESSAGE
// ===============================

router.post("/", async (req, res) => {

    try {

        const contact =
            new Contact(req.body);

        const savedContact =
            await contact.save();

        res.status(201).json({
            message: "Thank you! Your message has been sent successfully.",
            contact: savedContact
        });

    } catch (error) {

        console.log(
            "Contact Error:",
            error
        );

        res.status(500).json({
            message: "Failed to send message",
            error: error.message
        });
    }
});


module.exports = router;    