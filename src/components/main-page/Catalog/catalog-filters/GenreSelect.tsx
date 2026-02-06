import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import genresList from "./genresList.ts";

const GenreSelect = () => {
  const [genres, setGenres] = useState<string[]>([]);

  return (
    <Select
      multiple
      value={genres}
      onChange={(e) => setGenres(e.target.value as string[])}
      displayEmpty
      renderValue={() => "Genre"}
    >
      {genresList.map((item) => {
        return (
          <MenuItem value={item}>
            <Checkbox checked={genres.includes(item)} />
            <ListItemText primary={item} />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default GenreSelect;
