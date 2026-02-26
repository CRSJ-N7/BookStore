import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";

const GenreSelect = () => {
  const [genres, setGenres] = useState<string | string[]>([]);
  const genresData = useSelector((state: RootState) => state.books.genres);

  return (
    <Select
      multiple
      value={genres}
      onChange={(e) => setGenres(e.target.value)}
      displayEmpty
      renderValue={() => "Genre"}
    >
      {genresData.map((item) => {
        return (
          <MenuItem value={item}>
            <Checkbox
              checked={genres.includes(item)}
              sx={{ borderRadius: 0 }}
            />
            <ListItemText primary={item} />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default GenreSelect;
