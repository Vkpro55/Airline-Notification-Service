const express = require("express");

const apiRoutes = require("./routes");

const { ServerConfig, QueueConfig } = require("./config");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    await QueueConfig.connectQueue();
})  
