"use client";

import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryprops {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryprops> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => value as SelectCountryValue}
      />
    </>
  );
};

export default SelectCountry;
