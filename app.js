const express = require("express");
const mongoose = require("mongoose");
const app = express();
const APIRouter = require("./Routes/APIRouter");

const PORT = 5003;
const URI = "mongodb://127.0.0.1:27017/zometo";

// to enable/access post data
app.use(express.json()); // convert  data from string json  to pure json
// app.use(express.urlencoded({ extended: false }));normal post data to json data

app.use("/", APIRouter);
console.log("connecting to db....");
mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("db connected successfully!!");
      console.log("zometo api is running on prort", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
