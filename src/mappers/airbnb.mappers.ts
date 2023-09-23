import { IListingAndReview } from "../interfaces/houses";
import { ApiModel } from "../interfaces/houses.mappers";

export const mapAirbnbFromApiToModel = (item: IListingAndReview): ApiModel => ({
    title: item.name,
    images: item.images,
    description: item.description,
    address: item.address,
    bedrooms: item.bedrooms,
    beds: item.bedrooms, 
    bathrooms: item.bathrooms, 
    reviews: item.reviews,
  });
