import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import checkedIcon from "../../../../assets/main-page/filters/checked.svg";
import uncheckedIcon from "../../../../assets/main-page/filters/unchecked.svg";

const GenreSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentGenres = searchParams.get("genres");
  const g = currentGenres?.split(","); // GENIUS BLYAT

  const [genres, setGenres] = useState<string | string[]>(g ?? []);

  const genresData = useAppSelector((state) => state.books.genres);

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
              icon={<img src={uncheckedIcon} />}
              checkedIcon={<img src={checkedIcon} />}
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
