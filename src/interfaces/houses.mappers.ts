
export interface ApiModel {
  title: string;
  images: IImageUrls;
  description: string;
  address: IAddress;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews: IReview[];
};

interface IImageUrls {
  thumbnail_url: string;
  medium_url: string;
  picture_url: string;
  xl_picture_url: string;
};

interface  IAddress {
    street: string;
    suburb: string;
    government_area: string;
    market: string;
    country: string;
    country_code: string;
    location: ILocation;
  };

interface ILocation {
  type: string;
  coordinates: [number, number];
  is_location_exact: boolean;
};

interface IReview {
  _id: string;
  date: Date;
  reviewer_id: string;
  reviewer_name: string;
  comments: string;
};

