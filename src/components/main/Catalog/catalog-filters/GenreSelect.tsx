import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import checked from "../../../../assets/main-page/filters/checked.svg";
import unchecked from "../../../../assets/main-page/filters/unchecked.svg";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";

import {
  ArrowIcon,
  GenreText,
  StyledListItemText,
  StyledSelect,
} from "./Filters.styles";
import filterArrow from "../../../../assets/main-page/filters/filterArrow.svg";
import { FlexWrapper } from "../../../../shared/styles/styles";
import bookApi from "../../../../api/bookApi";
import { setGenres } from "../../../../store/bookSlice";

const GenreSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentGenres = searchParams.get("genres");
  const g = currentGenres?.split(",");
  const dispatch = useAppDispatch();

  const [genres, setLocalGenres] = useState<string[]>(g ?? []);
  const [open, setOpen] = useState(false);

  const genresData = useAppSelector((state) => state.books.genres);

  const handleGenreChange = (selected: string[]) => {
    setLocalGenres(selected);

    const params = new URLSearchParams(searchParams);

    if (selected.length) {
      params.set("genres", selected.join(","));
    } else {
      params.delete("genres");
    }

    setSearchParams(params);
  };

  useEffect(() => {
    const loadGenres = async () => {
      const genres = await bookApi.getGenres();
      dispatch(setGenres(genres));
    };

    loadGenres();
  }, []);

  return (
    <StyledSelect
      multiple
      value={genres}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(e) => handleGenreChange(e.target.value as string[])}
      displayEmpty
      renderValue={() => (
        <FlexWrapper
          justify="space-between"
          align="center"
          style={{ width: "100%" }}
        >
          <GenreText>Genre</GenreText>

          <ArrowIcon
            src={filterArrow}
            style={{
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </FlexWrapper>
      )}
      MenuProps={{
        PaperProps: {
          sx: {
            mt: 1,
            borderRadius: "12px",
            background: "#F0F4EF",
          },
        },
      }}
    >
      {genresData.map((item) => (
        <MenuItem key={item} value={item}>
          <Checkbox
            icon={<img src={unchecked} />}
            checkedIcon={<img src={checked} />}
            checked={genres.includes(item)}
          />
          <StyledListItemText primary={item} />
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default GenreSelect;
