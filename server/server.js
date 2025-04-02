const express = require("express");
const fs = require('fs');
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/dbConnection");

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // body parser
app.use(errorHandler);

// routes
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
