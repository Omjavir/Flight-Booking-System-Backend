const express = require("express");
const { PORT } = require("./config");
const app = express();

const apiRoutes = require("./routes");

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("App running on port", PORT);
});
