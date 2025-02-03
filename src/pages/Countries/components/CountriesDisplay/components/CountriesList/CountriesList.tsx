import { Country } from '@interfaces/types';
import CountryFlag from '../CountryFlag/CountryFlag';

interface CountriesListProps {
  countries: Country[] | null;
}

export function CountriesList({ countries }: CountriesListProps) {
  return (
    Array.isArray(countries) &&
    countries.map((country: Country) => (
      <CountryFlag key={country.cca3} {...country} />
    ))
  );
}
