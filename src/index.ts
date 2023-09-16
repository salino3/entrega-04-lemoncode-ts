
// npm init -y
// npm install typescript ts-node @types/node --save-dev
// npm install mongodb --save
// npm i dotenv --save
// npm install @types/mongoose --save-dev

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { listingsRouter } from "./routes/listing";



const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

const mongoDBUri: string | undefined = process.env.MONGO_URI;

// Connection at MongoDB
if (mongoDBUri) {
  mongoose
    .connect(mongoDBUri)
    .then(() => {
      console.log("Conexión a MongoDB establecida");
    })
    .catch((error) => {
      console.error("Error al conectar a MongoDB:", error);
    });
}

app.use("/api", listingsRouter);


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
