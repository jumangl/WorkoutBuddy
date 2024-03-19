require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//express app
const app = express();
const mongoose = require("mongoose");
//MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen request
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port`, process.env.PORT);
      console.log("DB Connection Successful");
    });
  })
  .catch((error) => {
    console.log(error);
  });
