//Wyszukiwanie po tekście po stronie frontu
import { Country } from '@interfaces/types';
import React from 'react';

export const useCountriesFilter = (
  countries: Country[],
  searchValue: string
): { filteredCountries: Country[]; error: string | null } => {
  const [error, setError] = React.useState<string | null>(null);

  const filteredCountries = React.useMemo(() => {
    if (!searchValue.trim()) {
      setError(null);
      return countries;
    }

    const searchRegex = new RegExp(searchValue, 'i');
    return countries.filter((country) =>
      searchRegex.test(country.name.common)
    );
  }, [countries, searchValue]);

  return { filteredCountries, error };
};
