import express from "express";
import { connectDB } from "./config/db";
import mongoose from "mongoose";
import routes from "./api/routes/api/tarotRoute";

// Connect to database
// connectDB();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
 
// Mount routes
app.use("/tarot", routes);


// const router = express.Router();
// app.use("/api", routes);
// app.use("/user", routes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

connectDB()
.then(() => {
  // Start the server after the database connection is established
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
})
.catch((err: Error) => {
  if (err instanceof Error) {
    console.error("Failed to connect to the database:", err.message);
  }
});
