import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const SortSelect = () => {
  const [sort, setSort] = useState("");

  return (
    <Select value={sort} displayEmpty onChange={(e) => setSort(e.target.value)}>
      <MenuItem value="">
        <em>Sort by</em>
      </MenuItem>

      <MenuItem value="нахуй">тут потом шото будет</MenuItem>
      <MenuItem value="ахуй">и тут тоже</MenuItem>
    </Select>
  );
};

export default SortSelect;
