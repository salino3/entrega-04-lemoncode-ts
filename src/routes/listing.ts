import express from "express";
import ListingModel from "../models/listing-schema"; 

const listingsRouter = express.Router();

listingsRouter.get("/listingsandreviews", async (req, res) => {
  try {
    const listings = await ListingModel.find();
    return res.json(listings);
  } catch (error) {
    console.error("Error getting listings and reviews:", error);
    return res.status(500).json({ error: "Error getting data" });
  }
});


export { listingsRouter };
