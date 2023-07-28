const express = require("express");
const app = express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const cors=require("cors");

app.use(cors());
const userRoute=require("./routes/userRoute")

app.use(express.json());

mongoose.connect(process.env.URI).
then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })

//   app.use("/api/user",userRoute);
  app.use(userRoute);




