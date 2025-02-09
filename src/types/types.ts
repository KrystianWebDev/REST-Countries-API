export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: Region;
  capital?: string;
  cca3: string;
  flags: {
    svg: string;
  };
}

export interface CountryDetails extends Country {
  subregion: string;
  borders?: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  tld: string[];
}
