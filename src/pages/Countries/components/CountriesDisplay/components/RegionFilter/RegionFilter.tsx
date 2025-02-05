import './RegionFilter.scss';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

interface RegionFilter {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

export function RegionFilter({
  selectedRegion,
  setSelectedRegion,
}: RegionFilter) {
  return (
    <select
      value={selectedRegion}
      onChange={(event) => setSelectedRegion(event.target.value)}
      className="region-filter"
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
