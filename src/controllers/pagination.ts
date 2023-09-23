import { IListingAndReview } from "../interfaces/houses";

export const getPaginationList = (
  housesList: IListingAndReview[],
  page?: number,
  pageSize?: number
) => {
 let paginatedHousesList = [...housesList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHousesList.length);
    paginatedHousesList = paginatedHousesList.slice(startIndex, endIndex);
  };

  return paginatedHousesList;
};
