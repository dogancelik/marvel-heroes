interface HeroCategory {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type?: string;
  }[];
  returned: number;
}

export interface HeroData {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: HeroCategory;
  series: HeroCategory;
  stories: HeroCategory;
  events: HeroCategory;
  urls: {
    type: string;
    url: string;
  }[];
}

export interface ApiResponse {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: HeroData[];
  };
}
