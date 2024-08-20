const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactUsRoutes = require("./routes/ContactUs.routes");
const contentRoutes = require("./routes/Content.routes");
const app = express();

dotenv.config();

// Enable CORS for all origins
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/contact-us", contactUsRoutes);
app.use("/api/content", contentRoutes);

mongoose
  .connect(
    "mongodb+srv://matthewtheseira:Rambo123@openagent-tech-test.zbap3.mongodb.net/?retryWrites=true&w=majority&appName=openAgent-tech-test"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
