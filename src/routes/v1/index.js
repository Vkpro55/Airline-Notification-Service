const express = require("express");
const { InfoController } = require("../../controllers");

const router = express.Router();

const emailRouter = require("./email-routes");

router.get("/info", InfoController.Info);
router.use("/tickets", emailRouter);

module.exports = router;