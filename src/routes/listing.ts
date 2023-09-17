import express from "express";
import { createReview, getAllLimitFive, getHouseDetail, getHousesByCountry } from "../controllers/airbnb-controller";

const listingsRouter = express.Router();


listingsRouter.get("/", getAllLimitFive);

listingsRouter.get("/property/:id", getHouseDetail);

 listingsRouter.get("/countries/:country", getHousesByCountry);

 listingsRouter.post("/:propertyId/reviews", createReview);


export { listingsRouter };
