// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";


import connectDB from "./src/db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();



// first approch to connect database
// jab bhi db sy connect kary gy tu tryCatch asycnawait sy karo
/*


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import express from "express";


const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error, "IN APP CONNECTION");
      throw ERROR;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error, "error in db connection");
    throw err;
  }
})();
*/
