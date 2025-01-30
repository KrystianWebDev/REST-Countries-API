import { Country } from '@interfaces/types';
import './CountryFlag.css';
function CountryFlag({
  name,
  population,
  region,
  capital,
  flag,
}: Country) {
  return (
    <section className="country-card">
      <img
        className="country-flag-img"
        src={flag}
        alt={`Flag of ${name}`}
      ></img>
      <h2 className="country-card-name">{name}</h2>
      <p className="country-card-paragraphs">
        Population: {population}
      </p>
      <p className="country-card-paragraphs">Region: {region}</p>
      <p className="country-card-paragraphs">Capital: {capital}</p>
    </section>
  );
}

export default CountryFlag;
