import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const SortSelect = () => {
  const [sort, setSort] = useState("Price");

  return (
    <Select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
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
