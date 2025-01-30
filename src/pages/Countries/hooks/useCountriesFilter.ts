import { Country } from '@interfaces/types';
import React from 'react';

export const useCountriesFilter = (
  countries: Country[],
  searchValue: string
) => {
  return React.useMemo(
    () =>
      countries.filter((country) =>
        country.name
          .toLocaleLowerCase()
          .includes(searchValue.toLowerCase())
      ),
    [countries, searchValue]
  );
};
