const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
    res.json({message: "Hello from the server!"});
});

app.listen(9000, () => {
    console.log("Server is running");
});