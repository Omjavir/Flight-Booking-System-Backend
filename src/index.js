const express = require("express");
const { ServerConfig, LoggerConfig } = require("./config");
const app = express();

const apiRoutes = require("./routes");

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log("App running on port", ServerConfig.PORT);
  LoggerConfig.info("successfully started Server", {});
});
