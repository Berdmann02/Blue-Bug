const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateTicketInput = data => {
    let errors = {};

    // check content field 
    // if(isEmpty(data.content)) {
    //     errors.content = "Content field can not be empty";
    // } else if(!Validator.isLength(data.content, {min: 1, max: 300})) {
    //     errors.content = "Content field must be between 1 and 300 characters";
    // }

    // check ticketName field
    if(isEmpty(data.name)) {
        errors.name = "Ticket Name field can not be empty";
    } else if(!Validator.isLength(data.name, {min: 1, max: 50})) {
        errors.name = "Ticket Name field must be between 1 and 50 characters";
    }

    // check steps field
    if(isEmpty(data.steps)) {
        errors.steps = "Steps to Reproduce Bug field can not be empty";
    } else if(!Validator.isLength(data.steps, {min: 1, max: 300})) {
        errors.steps = "Steps to Reproduce Bug field must be between 1 and 300 characters";
    }

    // check severity field
    if(isEmpty(data.severity)) {
        errors.severity = "Severity field can not be unmarked";
    } 
    // else if(!Validator.isLength(data.severity, {min: 1, max: 300})) {
    //     errors.severity = "Content field must be between 1 and 300 characters";
    // }

    // check assign field
    if(isEmpty(data.assign)) {
        errors.assign = "Assign Users field can not be unmarked";
    } 
    // else if(!Validator.isLength(data.assign, {min: 1, max: 300})) {
    //     errors.assign = "Content field must be between 1 and 300 characters";
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateTicketInput;