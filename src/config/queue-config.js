const amqplib = require('amqplib');
const { GMAIL_EMAIL } = require("./server-config");

let channel, connection;

async function connectQueue() {
    try {
        connection = await amqplib.connect("amqp://localhost");
        channel = await connection.createChannel();
        await channel.assertQueue("noti-queue");

        channel.consume("noti-queue", async (msg) => {
            if (msg !== null) {
                const obj = JSON.parse(`${Buffer.from(msg.content)}`);

                const { EmailService } = require("../services");

                await EmailService.sendEmail({
                    mailFrom: GMAIL_EMAIL,
                    mailTo: obj.recipientEmail,
                    mailSubject: obj.subject,
                    mailText: obj.text
                });

                channel.ack(msg);
            } else {
                console.log('Consumer cancelled by server');
            }
        });

    } catch (error) {
        console.error("RabbitMQ Connection Error:", error);
    }
}

module.exports = {
    connectQueue
};
