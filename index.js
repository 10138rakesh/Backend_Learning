require("dotenv").config();
const express = require("express");
const app = express();
const port=4000
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});



//*****   .env file
// .env file stores important project settings and secret data like PORT, API keys, and passwords 
// separately from the main code.
// dotenv.config() loads those values into process.env, so the project can use them securely and easily.