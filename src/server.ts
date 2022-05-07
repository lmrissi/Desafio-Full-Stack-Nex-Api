import express from "express";
import db from './db';
import { routes } from "./routes";

(async () => {
    try {
        return await db.sync();
    } catch (error) {
        return error
    }
})();

const app = express()

app.use(express.json())

app.use(routes)

app.listen(5000, () => console.log("Server is running"));