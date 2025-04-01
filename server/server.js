const express = require("express");
const fs = require('fs');
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/dbConnection");

connectDB();
const app = express();
const port = process.env.PORT || 3000;

// Write .env file in client/
fs.writeFileSync('../client/.env', `VITE_API_URL=http://localhost:${port}`);

app.use(cors({
    origin: 'http://localhost:5173', // allow Vite dev server
}));
app.use(express.json()); // body parser
app.use(errorHandler);

// routes
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
