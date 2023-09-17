import { Request, Response } from "express";
import ListingModel from "../models/listing-schema";
import { v4 as uuidv4 } from "uuid";

export const getAllLimitFive = async (req: Request, res: Response) => {
  try {
    const properties = await ListingModel.find().limit(5);
    return res.json(properties);
  } catch (error) {
    console.error("Error getting data:", error);
    return res.status(500).json({ error: "Error getting data" });
  };
};


export const getHouseDetail = async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  try {
    const property = await ListingModel.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    };

     const propertyDetail = {
       title: property.name,
       image: property.images.picture_url,
       description: property.description,
       address: property.address,
       bedrooms: property.bedrooms,
       beds: property.beds,
       bathrooms: property.bathrooms,
       reviews: property.reviews
     };

    return res.json(propertyDetail);
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


export const createReview = async (req: Request, res: Response) => {
  const propertyId = req.params.propertyId;
  const {reviewer_id, reviewer_name, comments } = req.body;

  try {
    const property = await ListingModel.findById(propertyId);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    const newReviewId = uuidv4();

    const newReview = {
      _id: newReviewId,
      date: new Date(),
      reviewer_id,
      reviewer_name,
      comments,
    };

    property.reviews.push(newReview);

    await property.save();

    return res.json(property);
  } catch (error) {
    console.error("Error creating review:", error);
    return res.status(500).json({ error: "Error creating review" });
  }
};
