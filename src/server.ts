import express from "express";
import db from './db';

(async () => {
    try {
        return await db.sync();
    } catch (error) {
        return error
    }
})();

const app = express()

app.use(express.json())

app.listen(5000, () => console.log("Server is running"));