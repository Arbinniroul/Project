import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { handleError } from "./middleware/error.handler";
import authRoute from "./routes/auth.routes";
import { connectDB } from "./utils/connectDB";

dotenv.config();
const app = express();


connectDB().catch(err => {
  console.error("❌ Failed to connect to MongoDB:", err.message);
  process.exit(1);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("\n=== INCOMING REQUEST ===");
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Headers:", req.headers);
  console.log("Query:", req.query);
  console.log("Body:", req.body);
  console.log("========================\n");
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    credentials: true,
  })
);
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.json({ 
    status: "running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});


app.use("/api/v1/auth", authRoute);


app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});


app.use(handleError);


const PORT = process.env.PORT || 8001;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  

  console.log("\n=== REGISTERED ROUTES ===");
  app._router.stack.forEach((layer: any) => {
    if (layer.route) {
      const path = layer.route.path;
      const methods = layer.route.methods;
      Object.keys(methods).forEach(method => {
        console.log(`${method.toUpperCase()} ${path}`);
      });
    }
  });
  console.log("=======================\n");
});


process.on("unhandledRejection", (err: Error) => {
  console.error("⚠️ Unhandled Rejection:", err.message);
  server.close(() => process.exit(1));
});


process.on("uncaughtException", (err: Error) => {
  console.error("⚠️ Uncaught Exception:", err.message);
  server.close(() => process.exit(1));
});

export default app;