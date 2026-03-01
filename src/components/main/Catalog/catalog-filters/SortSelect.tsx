import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortSelect = () => {
  const [sort, setSort] = useState("Price");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    setSort(value);

    const params = new URLSearchParams(searchParams);
    params.set("sortBy", `${value}`);

    setSearchParams(params);
  };

  return (
    <Select
      value={sort}
      onChange={(e) => handleChange(e.target.value as string)}
      renderValue={(value) => `Sort by ${value.toLowerCase()}`}
    >
      <MenuItem value="Price">Price</MenuItem>
      <MenuItem value="Name">Name</MenuItem>
      <MenuItem value="Author name">Author name</MenuItem>
      <MenuItem value="Rating">Rating</MenuItem>
      <MenuItem value="Date of Issue">Date of Issue</MenuItem>
    </Select>
  );
};

export default SortSelect;
