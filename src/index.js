const express = require("express");
const apiRoutes = require("./routes");

const { ServerConfig, EmailConfig } = require("./config");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    try {
        const res = await EmailConfig.mailSender.sendMail({
            form: ServerConfig.GMAIL_EMAIL,
            to: "vinodrao835@gmail.com",
            subject: "Airpline Notification Service",
            text: "Veriy the working of Airline service."
        });

        console.log("Response is :", res);
    } catch (error) {
        console.log("Error is :", error);
    }
})  
