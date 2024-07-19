import GetApiResponseTomrrowIO from "./GetApiResponseTomorrowIO";

interface Geometry {
    type: string;
    coordinates: number[];
  }
  
  interface Location {
    id: string;
    name: string;
    geometry: Geometry;
    timezone: string;
    tags: unknown[];
    createdAt: string;
    updatedAt: string;
    isAccountResource: boolean;
  }
  
  interface LocationData {
    locations: Location[];
  }
  
  export type GetLocationApiResponse = 
    GetApiResponseTomrrowIO<LocationData>;
  