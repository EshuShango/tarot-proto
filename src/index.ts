import express from "express";
import { connectDB } from "./config/db";
import router from "./api/routes";
import bodyParser from "body-parser";
// import cors from "cors"
// import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to the database successfully.");
    // app.use(
    //   cors({
    //     credentials: true,
    //   })
    // );
    app.use(bodyParser.json());
    // app.get("/test", (req: Request, res: Response) => {
    //   res.json({ message: "Hello World!" });
    // });
    app.use("/", router);

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to start the server:", err.message);
    }
  }
};

startServer();

//*
// connectDB()
//   .then(() => {
//     // Start the server after the database connection is established
//     app.listen(PORT, () => {
//       console.log(`Server is running on port http://localhost:${PORT}`);
//     });
//   })
//   .catch((err: Error) => {
//     if (err instanceof Error) {
//       console.error("Failed to connect to the database:", err.message);
//     }
//   })
//   .then(() => {
//     app.use("/", router);
//   })
//   .catch((err: Error) => {
//     if (err instanceof Error) {
//       console.error("Sorry about that:", err.message);
//     }
//   });
//*
