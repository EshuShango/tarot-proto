import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import router from "./api/routes/index";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
//!below is test code
// import { PORT } from "./config/db";
// import expressApp from "./express-app";
//!above is test code
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const app = express();
    await connectDB();
    console.log("Connected to the database successfully.");

    const routes = router();
    app.use(compression());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(
      cors({
        credentials: true,
      })
    );
    app.use(routes);

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to start the server:", err.message);
      process.exit(1);
    }
  }
};
startServer();
//*

//*
// const startServer = async () => {
//   const app = express();
//   try {
//     await connectDB();
//     console.log("Connected to the database successfully.");

//     await expressApp(app);
//     console.log("Connected to the database successfully.");

//     app.listen(PORT, () => {
//       console.log(`Server is running on port http://localhost:${PORT}`);
//     });

//   } catch (err) {
//     if (err instanceof Error) {
//       console.error("Failed to start the server:", err.message);
//       process.exit(1);
//     }
//   }
// };
// startServer();

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
