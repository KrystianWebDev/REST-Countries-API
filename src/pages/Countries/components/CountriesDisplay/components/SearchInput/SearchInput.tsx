import React from 'react';

import './SearchInput.scss';

interface SearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchInput({
  searchValue,
  setSearchValue,
}: SearchInputProps) {
  return (
    <input
      className="search-input"
      type="text"
      autoFocus
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder="Search for a country..."
    />
  );
}
