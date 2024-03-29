require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require('path');

// import routes
const authRoute = require("./routes/auth")
const ticketsRoute = require("./routes/tickets");

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());

app.get("/api", (req, res) => {
    res.send("Blue Bug Server");
});

app.use("/api/auth", authRoute);
app.use("/api/tickets", ticketsRoute);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database')

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
});

