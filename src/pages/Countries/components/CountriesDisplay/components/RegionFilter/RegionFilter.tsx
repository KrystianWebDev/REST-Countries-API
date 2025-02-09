import { Region } from '@types/types';
import './RegionFilter.scss';

const regions = [
  Region.Africa,
  Region.Americas,
  Region.Asia,
  Region.Europe,
  Region.Oceania,
];

interface RegionFilterProps {
  selectedRegion: Region;
  setSelectedRegion: (region: Region) => void;
}

export function RegionFilter({
  selectedRegion,
  setSelectedRegion,
}: RegionFilterProps) {
  return (
    <select
      value={selectedRegion}
      onChange={(event) =>
        setSelectedRegion(event.target.value as Region)
      }
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
// TODO: Implement region filtering using backend API instead of frontend filtering
