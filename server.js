// DEPENDENDENCIES
const express = require("express");
const routes = require("./routes");

// DATA
const sequelize = require("./config/connection");

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use(routes);

// Initialization
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
