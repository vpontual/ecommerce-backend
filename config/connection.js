// Connecting to the database
require("dotenv").config();

// Import the Sequelize constructor from the library
const Sequelize = require("sequelize");

// Create a new Sequelize object
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "DB_HOST",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// Export the connection
module.exports = sequelize;
