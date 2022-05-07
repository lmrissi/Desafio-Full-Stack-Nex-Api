import "reflect-metadata";
import express from "express";
import db from './db';
import { routes } from "./routes";
import cors from "cors";

(async () => {
    try {
        return await db.sync();
    } catch (error) {
        return error
    }
})();

const app = express()

const allowedOrigins = ['http://localhost:5000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
  
app.use(cors(options));

app.use(express.json())

app.use(routes)

app.listen(5000, () => console.log("Server is running"));