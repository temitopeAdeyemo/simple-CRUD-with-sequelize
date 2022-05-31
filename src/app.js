const express = require("express");
const cors = require("cors");
const router = require("./routes/product.router");
const db = require("./db");
const PORT = 7070;
const app = express();
const corsOptions = {
  origin: "https//localhost:7070",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("Welcome Here!!!");
});
app.listen(PORT, () => {
  console.log("App is listening to port " + PORT);
});
