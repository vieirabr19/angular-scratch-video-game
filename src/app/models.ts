export interface IGame {
  id: number;
  background_image: string;
  name: string;
  raleased: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: IGenre[];
  parent_platforms: IParentPlatform[];
  publishers: IPublishers[];
  ratings: IRating[];
  screenshots: IShortScreenshot[];
  trailers: ITrailer[];
}

export interface IAPIResponse<T> {
  results: T[];
}

export interface IGenre {
  name: string;
}

export interface IParentPlatform {
  platform: {
    name: string;
    slug: string;
  };
}

export interface IPublishers {
  name: string;
}

export interface IRating {
  id: number;
  count: number;
  title: string;
}

export interface IShortScreenshot {
  image: string;
}

export interface ITrailer {
  data: {
    max: string;
  };
}
