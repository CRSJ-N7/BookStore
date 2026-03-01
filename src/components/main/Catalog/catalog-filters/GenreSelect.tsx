import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { useSearchParams } from "react-router-dom";

const GenreSelect = () => {
  const [genres, setGenres] = useState<string | string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const genresData = useSelector((state: RootState) => state.books.genres);

  const handleGenreChange = (selectedGenres: string[]) => {
    setGenres(selectedGenres);

    const params = new URLSearchParams(searchParams);
    if (selectedGenres.length > 0) {
      params.set("genres", selectedGenres.join(","));
    } else {
      params.delete("genres");
    }
    setSearchParams(params);
  };

  return (
    <Select
      multiple
      value={genres}
      onChange={(e) => handleGenreChange(e.target.value as string[])}
      displayEmpty
      renderValue={() => "Genre"}
    >
      {genresData.map((item) => {
        return (
          <MenuItem key={item} value={item}>
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
