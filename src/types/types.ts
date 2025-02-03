enum Region {
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
