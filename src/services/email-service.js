
const { TicketRepository } = require("../repositories");
const { EmailConfig } = require("../config");

const ticketRepo = new TicketRepository();

async function sendEmail(mailFrom, mailTo, mailSubject, mailText) {
    try {
        const response = EmailConfig.mailSender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailText
        })

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data) {
    try {
        const ticket = await ticketRepo.create(data);
        return ticket;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails() {
    try {
        const pendingTickets = await ticketRepo.getPendingEmails();
        return pendingTickets;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails
}