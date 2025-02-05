import { Country } from '@interfaces/types';

import './CountryFlag.scss';

function CountryFlag({
  name,
  population,
  region,
  capital,
  flags,
}: Country) {
  return (
    <section className="country-card">
      <img
        className="country-flag-img"
        src={flags.svg}
        alt={`Flag of ${name.common}`}
      />
      <h2 className="country-card-name">{name.common}</h2>
      <p className="country-card-paragraphs">
        <span className="country-card-label">Population: </span>
        <span className="country-card-value">
          {population.toLocaleString()}
        </span>
      </p>
      <p className="country-card-paragraphs">
        <span className="country-card-label">Region: </span>
        <span className="country-card-value">{region}</span>
      </p>
      <p className="country-card-paragraphs">
        <span className="country-card-label">Capital: </span>
        <span className="country-card-value">{capital}</span>
      </p>
    </section>
  );
}

export default CountryFlag;
