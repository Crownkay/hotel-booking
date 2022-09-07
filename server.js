const express = require("express");

const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms', roomsRoute)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("node server started using nodemon"));
