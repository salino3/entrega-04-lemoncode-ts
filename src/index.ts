import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; 
import { listingsRouter } from "./routes/listing";



const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

dotenv.config();

const mongoDBUri: string | undefined = process.env.MONGODB_URI;

// Connection to MongoDB
if (mongoDBUri) 
  mongoose
    .connect(mongoDBUri)
    .then(() => {
      console.log("Conexión a MongoDB establecida");
    })
    .catch((error) => {
      console.error("Error al conectar a MongoDB:", error);
    });


app.use("/api", listingsRouter);


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
