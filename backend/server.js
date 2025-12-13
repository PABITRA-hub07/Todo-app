const express = require("express");
const cors = require("cors");

const app = express();

//Middlewire
app.use(cors());
app.use(express.json());

//Test route
app.get("/", (req, res) => {
  res.send("Running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
