import express from "express";
import { getAllLimitFive, getDetailProperty, getHousesByCountry } from "../controllers/airbnb-controller";

const listingsRouter = express.Router();


listingsRouter.get("/", getAllLimitFive);

listingsRouter.get("/property/:id", getDetailProperty);

 listingsRouter.get("/countries/:country", getHousesByCountry);

export { listingsRouter };
