import { Document } from "mongoose";



export interface IListingAndReview extends Document {
  _id: string;
  listing_url: string;
  name: string;
  summary: string;
  space: string;
  description: string;
  neighborhood_overview: string;
  notes: string;
  transit: string;
  access: string;
  interaction: string;
  house_rules: string;
  property_type: string;
  room_type: string;
  bed_type: string;
  minimum_nights: string;
  maximum_nights: string;
  cancellation_policy: string;
  last_scraped: Date;
  calendar_last_scraped: Date;
  accommodates: number;
  bedrooms: number;
  beds: number;
  number_of_reviews: number;
  bathrooms: number;
  amenities: string[];
  price: number;
  weekly_price: number;
  monthly_price: number;
  cleaning_fee: number;
  extra_people: number;
  guests_included: number;
  images: IImageUrls;
  host: IHost;
  address: {
    street: string;
    suburb: string;
    government_area: string;
    market: string;
    country: string;
    country_code: string;
    location: ILocation;
  };
  availability: {
    availability_30: number;
    availability_60: number;
    availability_90: number;
    availability_365: number;
  };
  review_scores: {
    [key: string]: number;
  };
  reviews: IReview[];
};


interface ILocation {
  type: string;
  coordinates: [number, number];
  is_location_exact: boolean;
};

interface IImageUrls {
  thumbnail_url: string;
  medium_url: string;
  picture_url: string;
  xl_picture_url: string;
};

interface IHost {
  host_id: string;
  host_url: string;
  host_name: string;
  host_location: string;
  host_about: string;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: string;
  host_is_superhost: boolean;
  host_has_profile_pic: boolean;
  host_identity_verified: boolean;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string[];
};

interface IReview {
  _id: string;
  date: Date;
  reviewer_id: string;
  reviewer_name: string;
  comments: string;
};
