const express = require('express');
const router = express.Router();
const Tickets = require("../models/Tickets");
const requiresAuth = require("../middleware/permissions");
const validateTicketInput = require("../validation/ticketValidation");

// @route      GET /api/tickets/test
// @desc       Test the tickets route
// @access     Public
router.get("/test", (req, res) => {
    res.send("Ticket's route working");
});

// @route      POST /api/tickets/new
// @desc       Create a new ticket
// @access     Private
router.post("/new", requiresAuth, async (req, res) => {
    try {
        const {isValid, errors} = validateTicketInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        
        // create a new ticket
        const newTicket = new Tickets({
            user: req.user._id,
            content: req.body.content,
            complete: false,
        })

        // save the new ticket
        await newTicket.save();

        return res.json(newTicket);
    } catch(err) {
        console.log(err);

        return res.status(500).send(err.message);
    }
});

// @route      GET /api/tickets/current
// @desc       Current users Tickets
// @access     Private
router.get("/current", requiresAuth, async (req, res) => {
    try {
        const completeTickets = await Tickets.find(
            {
                user: req.user._id,
                complete: true,
            }).sort({completedAt: -1});

            const incompleteTickets = await Tickets.find({
                user: req.user._id,
                complete: false,
                }).sort({createdAt: -1});

                return res.json({incomplete: incompleteTickets, complete: completeTickets})
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
})

module.exports = router;