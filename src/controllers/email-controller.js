
const { StatusCodes } = require("http-status-codes");
const { EmailService } = require("../services");
const { SuccessResponse } = require("../utils/common");


async function create(req, res) {
    try {
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail
        });

        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {

    }
}

module.exports = {
    create
}