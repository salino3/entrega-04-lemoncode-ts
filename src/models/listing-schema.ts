import mongoose, { Schema } from "mongoose";
import { IListingAndReview } from "../interfaces/houses";

const listingSchema = new Schema<IListingAndReview>({
  _id: String,
  listing_url: String,
  name: String,
  summary: String,
  space: String,
  description: String,
  neighborhood_overview: String,
  notes: String,
  transit: String,
  access: String,
  interaction: String,
  house_rules: String,
  property_type: String,
  room_type: String,
  bed_type: String,
  minimum_nights: String,
  maximum_nights: String,
  cancellation_policy: String,
  last_scraped: Date,
  calendar_last_scraped: Date,
  accommodates: Number,
  bedrooms: Number,
  beds: Number,
  number_of_reviews: Number,
  bathrooms: Number,
  amenities: [String],
  price: Number,
  weekly_price: Number,
  monthly_price: Number,
  cleaning_fee: Number,
  extra_people: Number,
  guests_included: Number,
  images: {
    thumbnail_url: String,
    medium_url: String,
    picture_url: String,
    xl_picture_url: String,
  },
  host: {
    host_id: String,
    host_url: String,
    host_name: String,
    host_location: String,
    host_about: String,
    host_thumbnail_url: String,
    host_picture_url: String,
    host_neighbourhood: String,
    host_is_superhost: Boolean,
    host_has_profile_pic: Boolean,
    host_identity_verified: Boolean,
    host_listings_count: Number,
    host_total_listings_count: Number,
    host_verifications: [String],
  },
  address: {
    street: String,
    suburb: String,
    government_area: String,
    market: String,
    country: String,
    country_code: String,
    location: {
      type: String,
      coordinates: [Number, Number],
      is_location_exact: Boolean,
    },
  },
  availability: {
    availability_30: Number,
    availability_60: Number,
    availability_90: Number,
    availability_365: Number,
  },
  review_scores: {
    type: Map,
    of: Number,
  },
  reviews: [
    {
      _id: String,
      date: Date,
      reviewer_id: String,
      reviewer_name: String,
      comments: String,
    },
  ],
});

const ListingModel = mongoose.model<IListingAndReview>(
  "listingsandreviews",
  listingSchema
);

export default ListingModel;
