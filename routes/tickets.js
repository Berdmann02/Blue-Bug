const express = require('express');
const router = express.Router();
const Ticket = require("../models/Tickets");
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
        const newTicket = new Ticket({
            user: req.user._id,
            name: req.body.name,
            steps: req.body.steps,
            expected: req.body.expected,
            actual: req.body.actual,
            files: req.body.files,
            severity: req.body.severity,
            assign: req.body.assign,
            // content: req.body.content,
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
        const completeTickets = await Ticket.find(
            {
                user: req.user._id,
                complete: true,
            }).sort({completedAt: -1});

            const incompleteTickets = await Ticket.find({
                user: req.user._id,
                complete: false,
                }).sort({createdAt: -1});

                return res.json({incomplete: incompleteTickets, complete: completeTickets})
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

// @route      PUT /api/tickets/:ticketId/complete
// @desc       Mark a ticket as complete
// @access     Private
router.put("/:ticketId/complete", requiresAuth, async (req, res) => {
    try {
        const ticket = await Ticket.findOne({
            user: req.user._id,
            _id: req.params.ticketId
        });

        if(!ticket) {
            return res.status(404).json({error: "Could not find ticket"});
        }

        if(ticket.complete) {
            return res.status(400).json({error: "Ticket is already complete"})
        };

        const updatedTicket = await Ticket.findOneAndUpdate(
            {
                user: req.user._id,
                _id: req.params.ticketId,
            },
            {
                complete: true,
                completedAt: new Date(),
            },
            {
                new: true
            }
            );

            return res.json(updatedTicket);
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

// @route      PUT /api/tickets/:ticketId/incomplete
// @desc       Mark a ticket as incomplete
// @access     Private
router.put("/:ticketId/incomplete", requiresAuth, async (req, res) => {
    try {
        const ticket = await Ticket.findOne({
            user: req.user._id,
            _id: req.params.ticketId,
        });

        if(!ticket) {
            return res.status(404).json({error: "Could not find ticket"});
        }

        if(!ticket.complete) {
            return res.status(400).json({error: "Ticket is already incomplete"});
        }

        const updatedTicket = await Ticket.findOneAndUpdate(
            {
                user: req.user._id,
                _id: req.params.ticketId,
            },
            {
                complete: false,
                completedAt: null
            },
            {
                new: true
            }
        )

        return res.json(updatedTicket);
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

// @route      PUT /api/tickets/:ticketId
// @desc       Update a ticket
// @access     Private
router.put("/:ticketId", requiresAuth, async (req, res) => {
    try {
        const ticket = await Ticket.findOne({
            user: req.user._id,
            _id: req.params.ticketId,
        });

        if(!ticket) {
            return res.status(404).json({error: 'Could not find ticket'});
        }

        const { isValid, errors } = validateTicketInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const updatedTicket = await Ticket.findOneAndUpdate(
            {
                user: req.user._id,
                _id: req.params.ticketId,
            },
            {
                content: req.body.content
            },
            {
                new: true
            }
        );

        return res.json(updatedTicket);
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

// @route      DELETE /api/tickets/:ticketId
// @desc       Delete a ticket
// @access     Private
router.delete("/:ticketId", requiresAuth, async (req, res) => {
    try {
        const ticket = await Ticket.findOne({
            user: req.user._id,
            _id: req.params.ticketId,
        });

        if(!ticket) {
            return res.status(404).json({error: "Could not find ticket"});
        }

        await Ticket.findOneAndRemove({
            user: req.user._id,
            _id: req.params.ticketId,
        })

        return res.json({ success: true })
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

module.exports = router;