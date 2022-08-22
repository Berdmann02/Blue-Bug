const {Schema, model} = require('mongoose');

const TicketSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        name: {
            type: String,
            required: true,
        },
        steps: {
            type: String,
            required: true
        },
        expected: {
            type: String,
        },
        actual: {
            type: String,
        },
        files: {
            type: Buffer, 
            contentType: String,
        },
        severity: {
            type: String,
            required: true,
        },
        assign: [
            {
                type: String,
                required: true,
            }
        ],
        // content: {
        //     type: String,
        //     required: true,
        // },
        complete: {
            type: Boolean,
            default: false,
        },
        completedAt: {
            type: Date,
        }
    },
    {
        timestamps: true
    }
);

//export the model
const Tickets = model("Tickets", TicketSchema);
module.exports = Tickets;