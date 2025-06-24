import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppSource } from "./database";
import { initFirebase } from "./services/firebase";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function bootstrap() {
  try {
    await AppSource.initialize();
    initFirebase();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

bootstrap();
