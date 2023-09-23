import { Request, Response } from "express";
import ListingModel from "../models/listing-schema";
import { IListingAndReview } from "../interfaces/houses";
import { v4 as uuidv4 } from "uuid";

export const getAllLimitFive = async (req: Request, res: Response) => {
  try {
    const properties: IListingAndReview[] = await ListingModel.find()
      .limit(5)
      .select({
        title: 1,
        images: 1,
        description: 1,
        address: 1,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        reviews: 1,
      });
         const propertiesWithLastFiveReviews = properties.map((property) => ({
           ...property.toObject(),
           reviews: property.reviews.slice(-5), 
         })); 

    return res.json(propertiesWithLastFiveReviews);
  } catch (error) {
    console.error("Error getting data:", error);
    return res.status(500).json({ error: "Error getting data" });
  };
};


export const getHouseDetail = async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  try {
    const property = await ListingModel.findById(propertyId).select({
      title: 1,
      images: 1,
      description: 1,
      address: 1,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      reviews: 1,
    });

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    };

const propertyWithLastFiveReviews = {
  ...property.toObject(),
  reviews: property.reviews.slice(-5),
};

    return res.json(propertyWithLastFiveReviews);
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
