import { Request, Response } from "express";
import ListingModel from "../models/listing-schema";


export const getAllLimitFive = async (req: Request, res: Response) => {
  try {
    const properties = await ListingModel.find().limit(5);
    return res.json(properties);
  } catch (error) {
    console.error("Error getting data:", error);
    return res.status(500).json({ error: "Error getting data" });
  };
};


export const getDetailProperty = async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  try {
    const property = await ListingModel.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    return res.json(property);
} catch (error) {
      console.error("Error getting details property", error);
    return res.status(500).json({ error: "Error getting details property" });
  };
};


export const getHousesByCountry = async (req: Request, res: Response) => {
  const country = req.params.country;

  try {
    const houses = await ListingModel.find({
      "address.country": country,
    }).limit(5);
    console.log(houses);
    return res.json(houses);
  } catch (error) {
    console.error("Error getting the houses by country", error);
    return res
      .status(500)
      .json({ error: "Error getting the houses by country" });
  };
};